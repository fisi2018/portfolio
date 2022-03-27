import { useTitle } from "../../hooks/useTitle"

export default function MoveTitle({title}){
    const {titleMov}=useTitle();
    return(
        <div ref={titleMov} className={`fixed left-0 top-1/2 w-full transition-all duration-700 ease-out translate-x-0 uppercase text-9xl font-bold dark:text-gray-600 text-gray-300`} >
            <h1>{title}</h1>
        </div>
   
    )
}