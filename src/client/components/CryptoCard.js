// @flow

import React from 'react'
import { List } from 'semantic-ui-react'

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
    <List>
      <List.Item>Name: {name}</List.Item>
      <List.Item>Symbol: {symbol}</List.Item>
      <List.Item>Price: {price}$</List.Item>
      <List.Item>Change since last 24h: {change24h}</List.Item>
      <List.Item>Change since last 7d: {change7d}</List.Item>
    </List>
  )
