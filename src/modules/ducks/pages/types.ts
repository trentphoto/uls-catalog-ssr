export const FETCH_ALL_PAGES_REQUEST = '@@pages/FETCH_ALL_PAGES_REQUEST'
export const FETCH_ALL_PAGES_FAIL = '@@pages/FETCH_ALL_PAGES_FAIL'
export const FETCH_ALL_PAGES_SUCCESS = '@@pages/FETCH_ALL_PAGES_SUCCESS'

export interface PageState {
  allPages: {
    error: string | null
    loading: boolean
    data: Page[]
  }
}
