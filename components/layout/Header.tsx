import Image from "next/image";
import logoPortfolio from "../../assets/images/F.png";
import BurgerButton from "../common/BurgerButton";
import Panel from "../common/Panel";
export default function Header(){
    return(
        <header className="fixed top-0 right-0 left-0" >
            <div className="flex relative p-4 justify-between" >

            <div className="flex" >

            <Image width={48} height={48}  src={logoPortfolio} />
            </div>
            <BurgerButton/>
            <Panel/>
            </div>
        </header>
    )
}