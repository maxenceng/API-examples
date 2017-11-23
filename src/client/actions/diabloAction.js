// @flow

import { createAction } from 'redux-actions'
import axios from 'axios'

import { DIABLO_URL } from '../../utils/config'
import { BLIZZARD_API } from '../../../keys'

export const FETCHING_DIABLO_DATA = 'FETCHING_DIABLO_DATA'
export const FETCHING_DIABLO_DATA_SUCCESS = 'FETCHING_DIABLO_DATA_SUCCESS'
export const FETCHING_DIABLO_DATA_ERROR = 'FETCHING_DIABLO_DATA_ERROR'

export const fetchingData = createAction(FETCHING_DIABLO_DATA)
export const fetchingSuccess = createAction(FETCHING_DIABLO_DATA_SUCCESS)
export const fetchingError = createAction(FETCHING_DIABLO_DATA_ERROR)

export function fetchDiablo(profile: string) {
  return (dispatch: Function) => {
    dispatch(fetchingData())
    return axios.get(`${DIABLO_URL}${profile}/?locale=en_GB&apikey=${BLIZZARD_API}`)
      .then((res: Object) => {
        dispatch(fetchingSuccess(res.data))
      })
      .catch((err: Object) => {
        dispatch(fetchingError(err.data))
      })
  }
}
