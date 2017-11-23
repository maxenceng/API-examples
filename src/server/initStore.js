// @flow

import Immutable from 'immutable'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promise from 'redux-promise'

import reducers from '../client/reducers/'
import battleTagReducer from '../client/reducers/battleTagReducer'
import cryptoReducer from '../client/reducers/cryptoReducer'
import diabloReducer from '../client/reducers/diabloReducer'
import weatherReducer from '../client/reducers/weatherReducer'

/**
 * Initiates the store on the server
 * @param  {Object} plainState
 */
export default (plainState: ?Object) => {
  const preloadedState = plainState ? {} : undefined

  if (plainState && plainState.battleTag) {
    // flow-disable-next-line
    preloadedState.battleTag = battleTagReducer(undefined, {})
      .merge(Immutable.fromJS(plainState.battleTag))
  }
  if (plainState && plainState.crypto) {
    // flow-disable-next-line
    preloadedState.crypto = cryptoReducer(undefined, {})
      .merge(Immutable.fromJS(plainState.crypto))
  }
  if (plainState && plainState.diablo) {
    // flow-disable-next-line
    preloadedState.diablo = diabloReducer(undefined, {})
      .merge(Immutable.fromJS(plainState.diablo))
  }
  if (plainState && plainState.weather) {
    // flow-disable-next-line
    preloadedState.weather = weatherReducer(undefined, {})
      .merge(Immutable.fromJS(plainState.weather))
  }
  return createStore(
    reducers,
    preloadedState,
    applyMiddleware(thunkMiddleware, promise),
  )
}
