import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logoPortfolio from "../../assets/images/F.png";
import { useHeader } from "../../hooks/useHeader";
import BurgerButton from "../common/BurgerButton";
import Panel from "../common/Panel";
export default function Header(){
    const {headerRef}=useHeader();
    return(
        <header ref={headerRef}  className={` flex p-4 justify-between fixed top-0 right-0 z-40 bg-white transition-all duration-300 left-0  `} >
            <div className="flex" >

            <Image width={48} height={48}  src={logoPortfolio} />
            </div>
            <BurgerButton/>
            <Panel/>          
           
        </header>
    )
}