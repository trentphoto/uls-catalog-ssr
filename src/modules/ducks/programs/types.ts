export const FETCH_ALL_PROGRAMS_REQUEST =
  '@@programs/FETCH_ALL_PROGRAMS_REQUEST'
export const FETCH_ALL_PROGRAMS_FAIL = '@@programs/FETCH_ALL_PROGRAMS_FAIL'
export const FETCH_ALL_PROGRAMS_SUCCESS =
  '@@programs/FETCH_ALL_PROGRAMS_SUCCESS'

export interface ProgramState {
  allPrograms: {
    error: string | null
    loading: boolean
    data: Program[]
  }
}
