// @flow

import React from 'react'
import { Input } from 'semantic-ui-react'

/**
 * @type {Object}
 */
type Props = {
  onchange: Function,
}

/**
 * @param  {Function} onchange
 */
export default ({ onchange }: Props) =>
  <Input onChange={onchange} type="text" />
