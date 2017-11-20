// @flow

import { combineReducers } from 'redux'

import testReducer from './testReducer'
import cryptoReducer from './cryptoReducer'
import diabloReducer from './diabloReducer'

/**
 * Combines all the reducers
 */
export default combineReducers({
  test: testReducer,
  crypto: cryptoReducer,
  diablo: diabloReducer,
})
