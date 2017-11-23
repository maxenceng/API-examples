// @flow

import 'regenerator-runtime/runtime'

import Koa from 'koa'
import Compress from 'koa-compress'
import Serve from 'koa-static'
import Mount from 'koa-mount'
import Router from 'koa-router'

import index from './routes/indexRoute'
import crypto from './routes/cryptoRoute'
import diablo from './routes/diabloRoute'
import weather from './routes/weatherRoute'
import notFound from './routes/404Route'
import { IS_PROD, STATIC_PATH, WEB_PORT } from '../utils/config'
import {
  HOME_ROUTE,
  CRYPTO_ROUTE,
  DIABLO_ROUTE,
  WEATHER_ROUTE,
  NOT_FOUND_ROUTE,
} from '../utils/routes'

const app = new Koa()
const router = new Router()

// Enables compression
app.use(Compress())

// Routes our static assets
app.use(Mount(`/${STATIC_PATH}`, Serve(STATIC_PATH)))

// Routes everything we have on the server
router.use(HOME_ROUTE, index.routes())
router.use(CRYPTO_ROUTE, crypto.routes())
router.use(DIABLO_ROUTE, diablo.routes())
router.use(WEATHER_ROUTE, weather.routes())
router.use(NOT_FOUND_ROUTE, notFound.routes())

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line
  console.log(`Running on port: ${WEB_PORT}(${IS_PROD ? 'production' : 'development'})`)
})
