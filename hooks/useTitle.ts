import {useRef,useEffect} from "react";
export const useTitle=()=>{
    const olderClass =useRef("translate-x-0");
    const titleMov=useRef<HTMLDivElement>();
    useEffect(()=>{
        document.addEventListener("scroll",handleMoveTitle);
        return ()=>document.removeEventListener("scroll",handleMoveTitle);
    },[])
    const handleMoveTitle=()=>{
        let porcentage:number=window.scrollY/Math.round(document.body.scrollHeight-window.innerHeight)*100;
        let newClass=`translate-x-[${porcentage.toFixed(2)}%]`;
        titleMov.current.style.transform=`translateX(${porcentage.toFixed(2)}%)`
        olderClass.current=newClass;
        
    }
    return{
        titleMov
    }
}