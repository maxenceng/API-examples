// @flow

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import immutable from 'immutable'
import logger from 'redux-logger'
import promise from 'redux-promise'

import { IS_PROD } from '../utils/config'
import reducers from './reducers/'

//eslint-disable-next-line no-underscore-dangle
const preloadedState = window.__PRELOADED_STATE__

/**
 * Creates our store
 */
export default createStore(
  reducers,
  {
    battleTag: immutable.fromJS(preloadedState.battleTag),
    crypto: immutable.fromJS(preloadedState.crypto),
    diablo: immutable.fromJS(preloadedState.diablo),
    weather: immutable.fromJS(preloadedState.weather),
  },
  // eslint-disable-next-line max-len
  IS_PROD ? applyMiddleware(thunkMiddleware, promise) : applyMiddleware(thunkMiddleware, promise, logger),
)
