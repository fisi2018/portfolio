import { createContext, ReactNode, useContext, useReducer } from "react";
import { ProviderValue } from "../../types/stateTypes";
import { initialNavState, navReducer } from "../reducers/navReducer";

const NavContext = createContext<ProviderValue>({nav:{active:false}});
type Props={
    children?:ReactNode
}
export const NavProvider=({children}:Props):JSX.Element=>{
    const [nav,dispatch]=useReducer(navReducer,initialNavState);
    const toggleNav=():void=>{
        dispatch({type:"TOGGLE_NAV"})
    }
    const value:ProviderValue={nav,toggleNav}
    return(
        <NavContext.Provider value={value}  >
        {children}
        </NavContext.Provider>
    )
}
export const useNav=()=>{
    const value=useContext(NavContext);
    return value
}