import { createAction } from '../../utils/createAction'
import { ActionsUnion } from '../../utils/types'
import * as types from './types'

const fetchAllPrograms = {
  fetchAllProgramsRequest: () => createAction(types.FETCH_ALL_PROGRAMS_REQUEST),
  fetchAllProgramsSuccess: (programs: Program[]) =>
    createAction(types.FETCH_ALL_PROGRAMS_SUCCESS, { programs }),
  fetchAllProgramsFail: (error: string) =>
    createAction(types.FETCH_ALL_PROGRAMS_FAIL, { error })
}

export const Actions = {
  ...fetchAllPrograms
}

export type Actions = ActionsUnion<typeof Actions>
