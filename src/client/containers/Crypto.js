// @flow

import React from 'react'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Segment } from 'semantic-ui-react'

import { fetchCrypto } from '../actions/cryptoAction'
import { initialState } from '../reducers/cryptoReducer'

import CryptoCard from '../components/CryptoCard'

/**
 * Maps the text when triggered, here it is on first load
 */
const mapStateToProps = state => ({
  crypto: state.crypto,
})

type Props = {
  fetchCrypto: Function,
  // eslint-disable-next-line react/no-typos
  crypto: ImmutablePropTypes.map,
}

class Crypto extends React.Component<Props> {
  componentDidMount() {
    if (this.props.crypto.equals(initialState)) {
      this.props.fetchCrypto()
    }
  }

  renderData() {
    const { crypto } = this.props
    if (crypto.get('isFetching')) {
      return <p>Is Fetching</p>
    }

    if (crypto.get('hasError')) {
      return <p>{crypto.get('errorMessage')}</p>
    }

    const data = crypto.get('data')
    const res = []
    data.forEach((value, key) => {
      /* eslint-disable function-paren-newline */
      res.push(
        <Segment raised key={key}>
          <CryptoCard
            name={value.get('name')}
            symbol={value.get('symbol')}
            price={value.get('price_usd')}
            change24h={value.get('percent_change_24h')}
            change7d={value.get('percent_change_7d')}
          />
        </Segment>,
      )
      /* eslint-enable function-paren-newline */
    })
    return res
  }

  render() {
    return <div>{this.renderData()}</div>
  }
}

export default connect(mapStateToProps, { fetchCrypto })(Crypto)
