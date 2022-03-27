import { AppProps } from "next/app";
import { LangProvider } from "../stateManagement/contexts/LangContext";
import { NavProvider } from "../stateManagement/contexts/NavContext";
import "../styles/global.css";

export default function MyApp({Component,pageProps}:AppProps){
    return (
        <LangProvider>
    <NavProvider>
        <Component {...pageProps} />
    </NavProvider>
        </LangProvider>

    )
}