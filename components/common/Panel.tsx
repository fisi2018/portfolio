import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLang } from '../../stateManagement/contexts/LangContext'
import { useNav } from '../../stateManagement/contexts/NavContext'
import LangButton from './LangButton'

export default function Panel () {
  const { nav, changeTheme } = useNav()
  const { state } = useLang()
  const { pathname } = useRouter()
  return (

          <div className={`text-gray-500 z-30 right-0 flex top-0 bottom-0 flex-col fixed w-full sm:w-1/2 transition-all duration-300 ${nav.active ? 'translate-x-0  ' : 'translate-x-full'}  bg-gray-800`} >
            <ul className="flex flex-col text-xl xl:text-3xl 2xl:text-4xl" >
                <li className="flex" >
                    <Link href="/" >
                    <a className={`p-6 transition-all duration-300  ${pathname.split('/').pop() === '' ? 'text-white' : ' hover:text-gray-300 '}`} >{state.content.panel.home}</a>
                    </Link>
                </li>
                <li className="flex" >
                    <Link href="/acerca-de" >
                    <a className={`p-6 transition-all duration-300  ${pathname.split('/').pop() === 'acerca-de' ? 'text-white' : 'hover:text-gray-300'} `} >{state.content.panel.about}</a>
                    </Link>
                </li>
                <li className="flex" >
                    <Link href="/proyectos" >
                    <a className={`p-6  transition-all duration-300 ${pathname.split('/').pop() === 'proyectos' ? 'text-white' : 'hover:text-gray-300'}`} >{state.content.panel.projects}</a>
                    </Link>
                </li>
                <li className="flex" >
                    <Link href="/contacto" >
                    <a className={`p-6  transition-all duration-300  ${pathname.split('/').pop() === 'contacto' ? 'text-white' : 'hover:text-gray-300'} `} >{state.content.panel.contact}</a>
                    </Link>
                </li>
                <li className="pl-6 my-4 2xl:my-8 flex" >
                    <p className="xl:text-xl 2xl:text-2xl text-base mr-3 " >{state.content.panel.theme}</p>
                    <button onClick={changeTheme} className="bg-gray-300  shadow-inner  p-0.5 rounded-3xl w-12 xl:w-16 flex items-center  " >

                        <span className="flex shadow-2xl items-center text-base translate-x-0 dark:translate-x-7 xl:dark:translate-x-9 transition-all duration-300 ease-out  rounded-full p-2 xl:p-3 bg-gray-800 text-gray-300 justify-center" >

                        </span>

                    </button>
                </li>
                <li className="pl-6 flex" >
                    <LangButton/>
                </li>
            </ul>

          </div>
  )
}
