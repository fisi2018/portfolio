import Link from "next/link";
import { useRouter } from "next/router";
import { useNav } from "../../stateManagement/contexts/NavContext"

export default function Panel(){
    const {nav}=useNav();
    const {pathname}=useRouter();
    return(
        <aside className="absolute w-1/2 top-full z-30 bg-red-100 " >
          <div className={`text-gray-500 z-30 right-0 flex top-0 bottom-0 flex-col fixed w-full xl:w-1/2 transition-all duration-300 ${nav.active?"translate-x-0  ":"translate-x-full"}  bg-gray-800`} >
            <ul className="flex flex-col text-3xl" >
                <li className="flex" >
                    <Link href="/" >
                    <a className={`p-6 transition-all duration-300 uppercase ${pathname.split("/").pop()===""?"text-white":" hover:text-gray-300 "}`}  >Inicio</a>
                    </Link>
                </li>
                <li className="flex" >
                    <Link href="/acerca-de" >
                    <a className={`p-6 transition-all duration-300 uppercase ${pathname.split("/").pop()==="acerca-de"?"text-white":"hover:text-gray-300"} `}  >Acerca de</a>
                    </Link>
                </li>
                <li className="flex" >
                    <Link href="/" >
                    <a className="p-6 uppercase transition-all duration-300 hover:text-gray-300  " >Proyectos</a>
                    </Link>
                </li>
                <li className="flex" >
                    <Link href="/" >
                    <a className="p-6 uppercase transition-all duration-300 hover:text-gray-300 " >Contacto</a>
                    </Link>
                </li>
                <li className="pl-6 my-4 flex" >
                    <p className="text-2xl mr-3" >Modo día</p>
                    <button className="bg-gray-300 shadow-inner p-0.5 rounded-3xl w-16 flex items-center justify-between " >
                        <span className="flex shadow-2xl items-center text-base rounded-full p-3 bg-gray-800 text-gray-300 justify-center" >
                            
                        </span>
                        
                    </button>
                </li>
                <li className="pl-6" >
                    <button className="p-2 text-xl bg-gray-400 text-gray-800 rounded-lg " >
                        Español(ES)
                    </button>
                </li>
            </ul>

          </div>

        
        </aside>
    )
}