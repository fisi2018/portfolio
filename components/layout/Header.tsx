import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logoPortfolio from "../../assets/images/F.png";
import BurgerButton from "../common/BurgerButton";
import Panel from "../common/Panel";
export default function Header(){
    const headerRef=useRef<HTMLElement>();
    useEffect(()=>{
        
        let control=0;
        document.addEventListener("scroll",()=>{
            if( window.scrollY>control){              
                control=window.scrollY;
                headerRef.current.classList.add("-translate-y-full");
            }else{
                if(window.scrollY<control){
                    control=window.scrollY;
                    headerRef.current.classList.remove("-translate-y-full");
                } 
            }
        })
    },[]);
    return(
        <header ref={headerRef} className={`fixed top-0 right-0 z-40 bg-white transition-all duration-300 left-0 `} >
            <div className="flex relative p-4 z-30 justify-between" >

            <div className="flex" >

            <Image width={48} height={48}  src={logoPortfolio} />
            </div>
            <BurgerButton/>
            <Panel/>          
            </div>
        </header>
    )
}