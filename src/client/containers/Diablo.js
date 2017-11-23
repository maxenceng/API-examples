// @flow

import React from 'react'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Card, Header } from 'semantic-ui-react'

import Button from '../components/Button'
import BattleTag from '../containers/BattleTag'
import DiabloCard from '../components/Card'
import { fetchDiablo } from '../actions/diabloAction'

/**
 * Maps the text when triggered, here it is on first load
 */
const mapStateToProps = state => ({
  diablo: state.diablo,
  battleTag: state.battleTag,
})

type Props = {
  fetchDiablo: Function,
  /* eslint-disable react/no-typos */
  diablo: ImmutablePropTypes.map,
  battleTag: ImmutablePropTypes.map,
  /* eslint-enable react/no-typos */
}

class Diablo extends React.Component<Props> {
  constructor(props) {
    super(props)
    this.clicked = false
    // flow-disable-next-line
    this.handleClick = this.handleClick.bind(this)
  }
  clicked: boolean

  handleClick() {
    this.clicked = true
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
    if (!this.clicked) {
      return <p />
    }
    if (heroes === undefined) {
      return <p>No heroes</p>
    }
    heroes.forEach((value, key) => {
      let imgClass = value.get('class').replace('-', '')
      if (imgClass === 'necromancer') {
        imgClass = 'p6_necro'
      }
      if (imgClass === 'crusader') {
        imgClass = 'x1_crusader'
      }
      const gender = value.get('gender') ? 'female' : 'male'
      /* eslint-disable function-paren-newline */
      res.push(
        <DiabloCard
          key={key}
          image={`https://blzmedia-a.akamaihd.net/d3/icons/portraits/42/${imgClass}_${gender}.png`}
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
        <div><Header as="h2">Paragon: {data.get('paragonLevel')}</Header></div>
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

export default connect(mapStateToProps, { fetchDiablo })(Diablo)
