// @flow

import { createAction } from 'redux-actions'
import axios from 'axios'

import { WEATHER_URL } from '../../utils/config'
import { WEATHER_API } from '../../../keys'

export const FETCHING_WEATHER_DATA = 'FETCHING_WEATHER_DATA'
export const FETCHING_WEATHER_DATA_SUCCESS = 'FETCHING_WEATHER_DATA_SUCCESS'
export const FETCHING_WEATHER_DATA_ERROR = 'FETCHING_WEATHER_DATA_ERROR'

export const fetchingData = createAction(FETCHING_WEATHER_DATA)
export const fetchingSuccess = createAction(FETCHING_WEATHER_DATA_SUCCESS)
export const fetchingError = createAction(FETCHING_WEATHER_DATA_ERROR)

export function fetchWeather(lat: number, lon: number) {
  return (dispatch: Function) => {
    dispatch(fetchingData())
    return axios.get(`${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${WEATHER_API}`)
      .then((res: Object) => {
        dispatch(fetchingSuccess(res.data))
      })
      .catch((err: Object) => {
        dispatch(fetchingError(err.data))
      })
  }
}
