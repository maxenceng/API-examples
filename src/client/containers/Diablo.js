// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Card } from 'semantic-ui-react'

import Button from '../components/Button'
import BattleTag from '../containers/BattleTag'
import DiabloCard from '../components/Card'
import { fetchDiablo } from '../actions/diabloAction'
import { initialState } from '../reducers/diabloReducer'
import { initialState as initialStateBT } from '../reducers/battleTagReducer'

/**
 * Maps the text when triggered, here it is on first load
 */
const mapStateToProps = state => ({
  diablo: state.diablo,
  battleTag: state.battleTag,
})

class Diablo extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const battleTag = encodeURIComponent(this.props.battleTag.get('battleTag'))
    this.props.fetchDiablo(battleTag)
  }

  renderData() {
    const { diablo } = this.props
    if (diablo.get('isFetching')) {
      return (
        <p>Fetching data!</p>
      )
    }
    if (diablo.get('hasError')) {
      if (diablo.get('errorMessage') === undefined) {
        return <p>Wrong battletag!</p>
      }
      return <p>{diablo.get('errorMessage')}</p>
    }

    const data = diablo.get('data')
    if (data.get('code') === 'NOTFOUND') {
      return <p>Account not found!</p>
    }

    const heroes = data.get('heroes')
    const res = []
    if (heroes === undefined) {
      return <p>No heroes</p>
    }
    heroes.forEach((value, key) => {
      /* eslint-disable function-paren-newline */
      res.push(
        <DiabloCard
          key={key}
          image="https://www.placecage.com/512/512"
          header={value.get('name')}
          meta={`Level ${value.get('level')}`}
          description={`Elite kills: ${value.get('kills').get('elites')}`}
          extra={value.get('seasonal') ? 'seasonal' : 'non-seasonal'}
        />,
      )
      /* eslint-enable function-paren-newline */
    })

    return (
      <div>
        <div>Paragon: {data.get('paragonLevel')}</div>
        <Card.Group>
          {res}
        </Card.Group>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div>
          <BattleTag />
          <Button onclick={this.handleClick} text="Search" />
        </div>
        {this.renderData()}
      </div>
    )
  }
}

Diablo.propTypes = {
  fetchDiablo: PropTypes.func.isRequired,
  /* eslint-disable react/no-typos */
  diablo: ImmutablePropTypes.map,
  battleTag: ImmutablePropTypes.map,
  /* eslint-enable react/no-typos */
}

Diablo.defaultProps = {
  diablo: initialState,
  battleTag: initialStateBT,
}

export default connect(mapStateToProps, { fetchDiablo })(Diablo)
