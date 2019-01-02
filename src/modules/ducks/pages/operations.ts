import api from '../../api'
import { Actions } from './actions'
import { Dispatch } from 'redux'

export const fetchAllPagesRequest = () => Actions.fetchAllPagesRequest()
export const fetchAllPagesFail = (error: string) =>
  Actions.fetchAllPagesFail(error)
export const fetchAllPagesSuccess = (pages: Page[]) =>
  Actions.fetchAllPagesSuccess(pages)

export const fetchAllPages = () => async (dispatch: Dispatch) => {
  try {
    dispatch(Actions.fetchAllPagesRequest())
    // first we make the api call to directus API
    const pages = await api.apiEndpoints.getAllPages()

    // finally we dispatch an action to our reducer and return the final array
    dispatch(Actions.fetchAllPagesSuccess(pages))
    return pages
  } catch (error) {
    dispatch(Actions.fetchAllPagesFail(error))
    return error
  }
}
