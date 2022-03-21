import { useBurgerButton } from "../../hooks/useBurgerButton"
import { useNav } from "../../stateManagement/contexts/NavContext"

export default function BurgerButton(){
    const {nav,toggleNav}=useNav();
    return(
        <button onClick={toggleNav} className={`flex items-center z-50 `} >
            <span className={`
            block relative 
            before:block before:transition-all before:duration-500 before:absolute before:w-full before:h-full before:content-[' '] before:bg-gray-800 before:-top-2 before:rounded-lg
            after:block after:transition-all after:duration-500 after:absolute after:w-full after:h-full after:content-[' '] after:bg-gray-800 after:-bottom-2 after:rounded-lg transition-all duration-500 ${nav.active?"-translate-x-4 bg-white before:bg-white after:bg-white -rotate-90 before:-rotate-[60deg] before:translate-y-6 before:translate-x-2 after:translate-y-2 after:-translate-x-2 after:rotate-[60deg] ":"bg-gray-800 "}  w-8 h-1 rounded-lg
            `} ></span>
        </button>
    )
}