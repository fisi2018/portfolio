import { AppProps } from "next/app";
import { NavProvider } from "../stateManagement/contexts/NavContext";
import "../styles/global.css";

export default function MyApp({Component,pageProps}:AppProps){
    return (
    <NavProvider>
        <Component {...pageProps} />
    </NavProvider>

    )
}