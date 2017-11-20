// @flow

import Immutable from 'immutable'
import type { fromJS as ImmutType } from 'immutable'

import {
  FETCHING_DIABLO_DATA,
  FETCHING_DIABLO_DATA_SUCCESS,
  FETCHING_DIABLO_DATA_ERROR,
} from '../actions/diabloAction'

/**
 * Example of an initial state
 */
export const initialState = Immutable.fromJS({
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: null,
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
    case FETCHING_DIABLO_DATA:
      return state.merge({
        isFetching: true,
        data: [],
        hasError: false,
        errorMessage: null,
      })
    case FETCHING_DIABLO_DATA_SUCCESS:
      return state.merge({
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null,
      })
    case FETCHING_DIABLO_DATA_ERROR:
      return state.merge({
        isFetching: false,
        data: [],
        hasError: true,
        errorMessage: action.payload,
      })
    default:
      return state
  }
}
