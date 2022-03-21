import { useNav } from "../../stateManagement/contexts/NavContext";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({children}:{children:JSX.Element}):JSX.Element{
    const {nav}=useNav();
    return(
        <section>
            <Header/>
            <main className={`${nav.active?"blur-md z-10":""}`}>
                {children}
            </main>
            <Footer/>
        </section>
    )
}