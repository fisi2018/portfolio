import { useState } from "react"

export const useBurgerButton=()=>{
    const [active,setActive]=useState<boolean>(false);
    const handleButton=()=>{
        active?setActive(false):setActive(true);
    }
    return{
        handleButton,
        active
    }
}