// @flow

import { createAction } from 'redux-actions'
import axios from 'axios'

import { CRYPTO_API_URL } from '../../utils/config'

export const FETCHING_COIN_DATA = 'FETCHING_COIN_DATA'
export const FETCHING_COIN_DATA_SUCCESS = 'FETCHING_COIN_DATA_SUCCESS'
export const FETCHING_COIN_DATA_ERROR = 'FETCHING_COIN_DATA_ERROR'

export const fetchingData = createAction(FETCHING_COIN_DATA)
export const fetchingSuccess = createAction(FETCHING_COIN_DATA_SUCCESS)
export const fetchingError = createAction(FETCHING_COIN_DATA_ERROR)

export function fetchCrypto() {
  return (dispatch) => {
    dispatch(fetchingData())
    return axios.get(`${CRYPTO_API_URL}/v1/ticker/?limit=10`)
      .then((res: Object) => {
        dispatch(fetchingSuccess(res.data))
      })
      .catch((err: Object) => {
        dispatch(fetchingError(err.data))
      })
  }
}
