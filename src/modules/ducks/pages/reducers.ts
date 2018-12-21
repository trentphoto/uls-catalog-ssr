import { combineReducers } from 'redux'
import * as types from './types'
import * as fromActions from './actions'

const initialState: types.PageState = {
  allPages: {
    error: null,
    loading: true,
    data: []
  }
}

const allPages = (
  state: types.PageState['allPages'] = initialState.allPages,
  action: fromActions.Actions
) => {
  switch (action.type) {
    case types.FETCH_ALL_PAGES_REQUEST:
      return { error: null, loading: true, data: [] }
    case types.FETCH_ALL_PAGES_SUCCESS:
      return { ...state, loading: false, data: action.payload.pages }
    case types.FETCH_ALL_PAGES_FAIL:
      return { ...state, loading: false, error: action.payload.error }
    default: {
      return state
    }
  }
}

export default combineReducers({ allPages })
