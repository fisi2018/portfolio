import { createContext, ReactNode, useContext, useReducer } from "react";
import { LANG } from "../../consts/lang";
import { Lang, ProviderLang } from "../../types/stateTypes";
import { initialLang, langReducer } from "../reducers/langReducer";

const LangContext = createContext<ProviderLang>({state:{
    content:LANG.ES,
    lang:Lang.Es}});
type Props={
    children?:ReactNode
}
export const LangProvider:({children}:Props)=>JSX.Element=({children})=>{
    const [state,dispatch]=useReducer(langReducer,initialLang);
    const changeLang:(lang:Lang)=>void=(lang)=>{
        dispatch({type:lang});
    }
    const value:ProviderLang={state,changeLang}
    return(
        <LangContext.Provider value={value} >
            {children}
        </LangContext.Provider>
    )
}
export const useLang=()=>{
    const value=useContext(LangContext);
    return value;
}