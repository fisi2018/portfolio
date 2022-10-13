import { AiOutlineFilePdf } from 'react-icons/ai'
import { FiFacebook, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Footer () {
  return (
        <footer className="p-4 bg-gray-900 dark:bg-black flex flex-col items-center text-gray-200 " >
            <nav className="w-full sm:w-40 2xl:w-80" >
                <ul className="flex justify-around sm:justify-between text-base lg-text-lg xl:text-xl 2xl:text-2xl " >
                    <li>
                      <a className="hover:text-purple-500 transition-all duration-300 ease-out" target="_blank" href="https://github.com/mjfura" rel="noreferrer">
                            <FiGithub/>
                        </a>
                    </li>
                    <li>
                        <a className="hover:text-sky-500 transition-all duration-300 ease-out" target="_blank" href="https://web.facebook.com/marcojosue.furamendoza/" rel="noreferrer">
                            <FiFacebook/>
                        </a>
                    </li>
                    <li>
                        <a className="hover:text-blue-500 transition-all duration-300 ease-out" target="_blank" href="https://www.linkedin.com/in/marco-josu%C3%A9-fura-mendoza-270a30212/" rel="noreferrer">
                            <FiLinkedin/>
                        </a>
                    </li>
                    <li>
                        <a className="hover:text-red-500 transition-all duration-300 ease-out" target="_blank" href="/pdfs/cv-marco.pdf">
                            <AiOutlineFilePdf/>
                        </a>
                    </li>
                </ul>
            </nav>

            <hr className="w-[80%] my-4 border-gray-400 rounded-lg " />
            <h1 className="text-sm sm:text-base 2xl:text-xl" >© Copyright 2022, All rights reserved.</h1>
            <p className="text-sm sm:text-base 2xl:text-xl" >Developed by Marco Fura</p>
        </footer>
  )
}
