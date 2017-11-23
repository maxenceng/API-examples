// @flow

// General
export const APP_NAME = 'React Koa SSR'
export const IS_PROD = process.env.NODE_ENV === 'production'
export const STATIC_PATH = 'static'
export const QUERY_CLASS = 'root'
export const QUERY_SELECTOR = `.${QUERY_CLASS}`

// Server
export const WEB_PORT = process.env.PORT || 8000

// Webpack
export const WDS_PORT = 7000

// Crypto API
export const CRYPTO_API_URL = 'https://api.coinmarketcap.com/'

// Open Weather API
export const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather'

// Diablo API
export const DIABLO_URL = 'https://eu.api.battle.net/d3/profile/'
