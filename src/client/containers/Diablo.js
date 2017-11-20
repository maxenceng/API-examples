// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import {
  fetchDiablo,
} from '../actions/diabloAction'
import { initialState } from '../reducers/diabloReducer'

/**
 * Maps the text when triggered, here it is on first load
 */
const mapStateToProps = state => ({
  diablo: state.diablo,
})

class Diablo extends React.Component {
  componentDidMount() {
    if (this.props.diablo === initialState) {
      this.props.fetchDiablo('Zenoss%232634')
    }
  }

  renderData() {
    const { diablo } = this.props
    if (diablo.get('isFetching')) {
      return <p>Is Fetching</p>
    }

    if (diablo.get('hasError')) {
      return <p>{diablo.errorMessage}</p>
    }

    const data = diablo.get('data')
    return <div>{data.get('battleTag')} {data.get('paragonLevel')}</div>
  }

  render() {
    return <div>{this.renderData()}</div>
  }
}

Diablo.propTypes = {
  fetchDiablo: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-typos
  diablo: ImmutablePropTypes.map,
}

Diablo.defaultProps = {
  diablo: initialState,
}

export default connect(mapStateToProps, { fetchDiablo })(Diablo)
