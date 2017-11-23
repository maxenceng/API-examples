// @flow

import { createAction } from 'redux-actions'

export const INPUT_CHANGE = 'INPUT_CHANGE'

export const inputChange = createAction(INPUT_CHANGE)

export function updateInput(battleTag: string) {
  return (dispatch: Function) => {
    dispatch(inputChange(battleTag))
  }
}
