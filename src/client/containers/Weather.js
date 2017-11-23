// @flow

import React from 'react'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import { fetchWeather } from '../actions/weatherAction'
import { initialState } from '../reducers/weatherReducer'

/**
 * Maps the text when triggered, here it is on first load
 */
const mapStateToProps = state => ({
  weather: state.weather,
})

type Props = {
  fetchWeather: Function,
  // eslint-disable-next-line react/no-typos
  weather: ImmutablePropTypes.map,
}

class Weather extends React.Component<Props> {
  componentDidMount() {
    if (this.props.weather.equals(initialState) && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.props.fetchWeather(pos.coords.latitude, pos.coords.longitude)
      })
    }
  }

  renderData() {
    const { weather } = this.props
    if (weather.get('isFetching')) {
      return <p>Is Fetching</p>
    }

    if (weather.get('hasError')) {
      return <p>{weather.get('errorMessage')}</p>
    }

    const data = weather.get('data')
    if (data.size === 0) {
      return <p>Could not get your position</p>
    }
    const temp = (data.get('main').get('temp') - 273.15).toFixed(2)
    return <h2>{temp}°C</h2>
  }

  render() {
    return <div>{this.renderData()}</div>
  }
}

export default connect(mapStateToProps, { fetchWeather })(Weather)
