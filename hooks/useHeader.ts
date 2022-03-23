import { useEffect, useRef } from "react";
import { useNav } from "../stateManagement/contexts/NavContext";

export const useHeader=()=>{
    const headerRef=useRef<HTMLElement>();
    const control=useRef(0);
    const {nav}=useNav();
    useEffect(()=>{
       if(!nav.active){
           eventScroll();
           return ()=>removeEvent();
       } 
    },[nav.active]);
    const handleScroll=()=>{  
        if(window.scrollY>control.current){
            control.current=window.scrollY;
             headerRef.current.classList.add("-translate-y-full");
            }else{
                if(window.scrollY<control.current){
                control.current=window.scrollY;
                  headerRef.current.classList.remove("-translate-y-full");
                }
            }
    }
    const eventScroll=()=>{ 
        document.addEventListener("scroll",handleScroll);
    }
    const removeEvent=()=>{
        document.removeEventListener("scroll",handleScroll);
    }
    return{
        headerRef
    }
}