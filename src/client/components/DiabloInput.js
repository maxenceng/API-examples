// @flow

import React from 'react'

/**
 * @type {Object}
 */
type Props = {
  onclick: Function,
  onchange: Function,
}

/**
 * @param  {Function} onclick
 * @param  {Function} onchange
 */
export default ({ onclick, onchange }: Props) =>
  (
    <div>
      <input onChange={onchange} type="text" />
      <button onClick={onclick}>Search</button>
    </div>
  )
