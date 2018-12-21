import api from '../../api'
import { Actions } from './actions'
import { Dispatch } from 'redux'
import { imgUrlBase } from '../../../config'
import { sortByOrder } from '../../utils/sortByOrder'

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
    // then we add a property to each item
    // this property contains the full image url
    const pagesProcessed = pages.map(i => ({
      fullImgUrl: imgUrlBase + i.img.data.url,
      ...i
    }))

    // then we sort the pages by order
    const pagesProcessedOrdered = pagesProcessed.sort(sortByOrder)

    // finally we dispatch an action to our reducer and return the final array
    dispatch(Actions.fetchAllPagesSuccess(pagesProcessedOrdered))
    return pagesProcessedOrdered
  } catch (error) {
    dispatch(Actions.fetchAllPagesFail(error))
    return error
  }
}
