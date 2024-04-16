import { StateNav } from '../../types/stateTypes'
import { NAV_ACTIONS } from '../actions/navActions'

export const initialNavState: StateNav = {
  active: false
}
export const navReducer: (
  state: StateNav,
  action: { type: string }
) => StateNav = (state, action) => {
  switch (action.type) {
    case NAV_ACTIONS.TOGGLE_NAV: {
      return state.active ? { active: false } : { active: true }
    }
    case NAV_ACTIONS.CLOSE_NAV: {
      return { active: false }
    }
    default: {
      return state
    }
  }
}
