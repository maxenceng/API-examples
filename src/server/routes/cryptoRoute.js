// @flow

import Router from 'koa-router'

import { get } from '../controllers/cryptoController'

const index = new Router()

/**
 * Calls the get function in our controller for our index route of this subrouter
 */
index.get('/', get)

export default index
