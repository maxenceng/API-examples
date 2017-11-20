// @flow

import React from 'react'

/**
 * @type {Object}
 */

type Props = {
  name: string,
  symbol: string,
  price: string,
  change24h: string,
  change7d: string,
}


/**
 * Crypto component, displayed everytime a currency is added
 * @param  {string} name
 * @param  {string} symbol
 * @param  {string} price
 * @param  {string} change24h
 * @param  {string} change
 * @param  {string} Props
 */
export default ({
  name, symbol, price, change24h, change7d,
}: Props) =>
  (
    <div>
      <div>Name: {name}</div>
      <div>Symbol: {symbol}</div>
      <div>Price: {price}$</div>
      <div>Change since last 24h: {change24h}</div>
      <div>Change since last 7d: {change7d}</div>
      <hr />
    </div>
  )
