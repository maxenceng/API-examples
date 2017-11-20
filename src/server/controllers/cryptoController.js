// @flow

import renderApp from '../renderApp'
import { cryptoPage } from '../defaultState'

/**
 * @param  {Object}   ctx
 * @param  {Function} next
 * @return {Promise}
 */
const get = async (ctx: Object, next: Function): Promise<any> => {
  await next()
  ctx.body = renderApp(ctx.url, cryptoPage())
}

/**
 * @param  {Object}   ctx
 * @param  {Function} next
 * @return {Promise}
 */
const post = async (ctx: Object, next: Function): Promise<any> => {
  await next()
}

export { get, post }
