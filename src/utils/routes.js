// @flow

import Home from '../client/pages/Home'
import Crypto from '../client/pages/Crypto'
import Diablo from '../client/pages/Diablo'
import Weather from '../client/pages/Weather'
import NotFound from '../client/pages/404'

// Routes
export const HOME_ROUTE = '/'
export const CRYPTO_ROUTE = '/crypto'
export const DIABLO_ROUTE = '/diablo'
export const WEATHER_ROUTE = '/weather'
export const NOT_FOUND_ROUTE = '/*'

// Route labels
export const HOME_LABEL = 'Home'
export const CRYPTO_LABEL = 'Cryptocurrencies'
export const DIABLO_LABEL = 'Diablo'
export const WEATHER_LABEL = 'Weather'
export const NOT_FOUND_LABEL = 'Not Found'


// Map of routes
export const ROUTES: Map<string, Array<any>> = new Map()
ROUTES.set(HOME_LABEL, [HOME_ROUTE, Home])
ROUTES.set(CRYPTO_LABEL, [CRYPTO_ROUTE, Crypto])
ROUTES.set(DIABLO_LABEL, [DIABLO_ROUTE, Diablo])
ROUTES.set(WEATHER_LABEL, [WEATHER_ROUTE, Weather])
ROUTES.set(NOT_FOUND_LABEL, [NOT_FOUND_ROUTE, NotFound])
