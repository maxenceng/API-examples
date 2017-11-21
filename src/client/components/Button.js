// @flow

import React from 'react'
import { Button } from 'semantic-ui-react'

/**
 * @type {Object}
 */
type Props = {
  onclick: Function,
  text: string,
}

/**
 * @param  {Function} onclick
 * @param  {string} text
 */
export default ({ onclick, text }: Props) =>
  <Button color="green" onClick={onclick}>{text}</Button>
