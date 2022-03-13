import { State } from '@/types/Store'
export const getters = {
  _getTheme: (state:State) => {
    return state.theme ? 'dark' : 'primary'
  }
}
