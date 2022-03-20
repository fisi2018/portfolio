import { useNav } from "../../stateManagement/contexts/NavContext"

export default function Panel(){
    const {nav}=useNav();
    return(
        <aside className="absolute w-1/2 top-full bg-red-100 " >
          <div className={`text-gray-200 right-0 fixed w-1/2 transition-all duration-300 ${nav.active?"translate-x-full":""}  bg-gray-800`} >
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Proyectos</li>
                <li>Contacto</li>
            </ul>
          </div>

        
        </aside>
    )
}