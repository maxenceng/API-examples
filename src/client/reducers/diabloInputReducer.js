// @flow

import Immutable from 'immutable'
import type { fromJS as ImmutType } from 'immutable'

import { INPUT_CHANGE } from '../actions/diabloInputAction'

/**
 * Example of an initial state
 */
export const initialState = Immutable.fromJS({
  battleTag: '',
})

/**
 * Modifies the state if one of the actions has been called
 * @param  {ImmutType} state
 * @param  {string} type
 * @param  {any} payload
 * @return {ImmutType}
 */
export default (
  state: ImmutType = initialState,
  action: { type: string, payload: any },
): ImmutType => {
  switch (action.type) {
    case INPUT_CHANGE:
      return state.set('battleTag', action.payload)
    default:
      return state
  }
}
