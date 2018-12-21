import api from '../../api'
import { Actions } from './actions'
import { Dispatch } from 'redux'

export const fetchAllProgramsRequest = () => Actions.fetchAllProgramsRequest()
export const fetchAllProgramsFail = (error: string) =>
  Actions.fetchAllProgramsFail(error)
export const fetchAllProgramsSuccess = (programs: Program[]) =>
  Actions.fetchAllProgramsSuccess(programs)

export const fetchAllPrograms = () => async (dispatch: Dispatch) => {
  try {
    dispatch(Actions.fetchAllProgramsRequest())
    const programs = await api.apiEndpoints.getAllPrograms()
    dispatch(Actions.fetchAllProgramsSuccess(programs))
    return programs
  } catch (error) {
    dispatch(Actions.fetchAllProgramsFail(error))
    return error
  }
}
