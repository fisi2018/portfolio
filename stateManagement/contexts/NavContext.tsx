import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer
} from 'react'
import { ProviderValue } from '../../types/stateTypes'
import { initialNavState, navReducer } from '../reducers/navReducer'

const NavContext = createContext<ProviderValue>({ nav: { active: false } })
type Props = {
  children?: ReactNode
}
export const NavProvider = ({ children }: Props) => {
  const [nav, dispatch] = useReducer(navReducer, initialNavState)
  useEffect(() => {
    localStorage.getItem('theme') &&
      document.documentElement.classList.add('dark')
  }, [])
  const toggleNav = (): void => {
    dispatch({ type: 'TOGGLE_NAV' })
  }
  const closeNav = (): void => {
    dispatch({ type: 'CLOSE_NAV' })
  }
  const changeTheme: () => void = () => {
    if (localStorage.getItem('theme')) {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem('theme')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }
  const value: ProviderValue = { nav, toggleNav, changeTheme, closeNav }
  return <NavContext.Provider value={value}>{children}</NavContext.Provider>
}
export const useNav = () => {
  const value = useContext(NavContext)
  return value
}
