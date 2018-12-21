import { createAction } from '../../utils/createAction'
import { ActionsUnion } from '../../utils/types'
import * as types from './types'

const fetchAllPages = {
  fetchAllPagesRequest: () => createAction(types.FETCH_ALL_PAGES_REQUEST),
  fetchAllPagesSuccess: (pages: Page[]) =>
    createAction(types.FETCH_ALL_PAGES_SUCCESS, { pages }),
  fetchAllPagesFail: (error: string) =>
    createAction(types.FETCH_ALL_PAGES_FAIL, { error })
}

export const Actions = {
  ...fetchAllPages
}

export type Actions = ActionsUnion<typeof Actions>
