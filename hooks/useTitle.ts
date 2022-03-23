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
        console.log("scroll ",window.scrollY," porcentage ",porcentage.toFixed(2));
        let newClass=`translate-x-[${porcentage.toFixed(2)}%]`;
        titleMov.current.classList.replace(olderClass.current,`${newClass}`);
        olderClass.current=newClass;
    }
    return{
        titleMov
    }
}