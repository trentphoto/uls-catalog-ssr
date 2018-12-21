import { PageState } from '../modules/ducks/pages/types'
import { ProgramState } from '../modules/ducks/programs/types'

declare interface ReduxState {
  pages: PageState
  programs: ProgramState
}
