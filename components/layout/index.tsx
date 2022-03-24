import { useNav } from "../../stateManagement/contexts/NavContext";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}):JSX.Element{
    const {nav}=useNav();
    return(
        <section className="overflow-x-hidden">
            <Header/>
            <main className={` ${nav.active?"blur-md ":""}`}>
                {children}
            </main>
            <Footer/>
        </section>
    )
}