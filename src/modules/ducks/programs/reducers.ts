import { combineReducers } from 'redux'
import * as types from './types'
import * as fromActions from './actions'

const initialState: types.ProgramState = {
  allPrograms: {
    error: null,
    loading: true,
    data: []
  }
}

const allPrograms = (
  state: types.ProgramState['allPrograms'] = initialState.allPrograms,
  action: fromActions.Actions
) => {
  switch (action.type) {
    case types.FETCH_ALL_PROGRAMS_REQUEST:
      return {
        error: null,
        loading: true,
        data: []
      }
    case types.FETCH_ALL_PROGRAMS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.programs
      }
    case types.FETCH_ALL_PROGRAMS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    default:
      return state
  }
}

export default combineReducers({ allPrograms })
