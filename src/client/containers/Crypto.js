// @flow

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'

import {
  fetchCrypto,
} from '../actions/cryptoAction'
import { initialState } from '../reducers/cryptoReducer'

import CryptoCard from '../components/CryptoCard'

/**
 * Maps the text when triggered, here it is on first load
 */
const mapStateToProps = state => ({
  crypto: state.crypto,
})

class Crypto extends React.Component {
  componentDidMount() {
    if (this.props.crypto === initialState) {
      this.props.fetchCrypto()
    }
  }

  renderData() {
    const { crypto } = this.props
    if (crypto.get('isFetching')) {
      return <p>Is Fetching</p>
    }

    if (crypto.get('hasError')) {
      return <p>{crypto.errorMessage}</p>
    }

    const data = crypto.get('data')
    const res = []
    data.forEach((value, key) => {
      /* eslint-disable function-paren-newline */
      res.push(
        <CryptoCard
          key={key}
          name={value.get('name')}
          symbol={value.get('symbol')}
          price={value.get('price_usd')}
          change24h={value.get('percent_change_24h')}
          change7d={value.get('percent_change_7d')}
        />,
      )
      /* eslint-enable function-paren-newline */
    })
    /*
    for(const element of data) {
      res.push(
        <CryptoCard
          key={element.id}
          name={element.name}
          symbol={element.symbol}
          price={element.price_usd}
          change24h={element.percent_change_24h}
          change7d={element.percent_change_7d}
        />
      )
    }
    */
    return res

  }

  render() {
    return <div>{this.renderData()}</div>
  }
}

Crypto.propTypes = {
  fetchCrypto: PropTypes.func.isRequired,
  // eslint-disable-next-line react/no-typos
  crypto: ImmutablePropTypes.map,
}

Crypto.defaultProps = {
  crypto: initialState,
}

export default connect(mapStateToProps, { fetchCrypto })(Crypto)
