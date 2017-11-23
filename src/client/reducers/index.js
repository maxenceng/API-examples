// @flow

import { combineReducers } from 'redux'

import cryptoReducer from './cryptoReducer'
import diabloReducer from './diabloReducer'
import battleTagReducer from './battleTagReducer'
import weatherReducer from './weatherReducer'

/**
 * Combines all the reducers
 */
export default combineReducers({
  crypto: cryptoReducer,
  diablo: diabloReducer,
  battleTag: battleTagReducer,
  weather: weatherReducer,
})
