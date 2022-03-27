import { AiOutlineFilePdf } from "react-icons/ai";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer():JSX.Element{
    return(
        <footer className="p-4 bg-gray-900 dark:bg-black flex flex-col items-center text-gray-200 " >
            <nav className="w-full sm:w-40" >
                <ul className="flex justify-between text-xl " >
                    <li>
                        <a className="hover:text-purple-500 transition-all duration-300 ease-out" target="_blank" href="https://github.com/fisi2018">
                            <FiGithub/>
                        </a>
                    </li>
                    <li>
                        <a className="hover:text-sky-500 transition-all duration-300 ease-out" target="_blank" href="https://web.facebook.com/marcojosue.furamendoza/">
                            <FiFacebook/>
                        </a>
                    </li>
                    <li>
                        <a className="hover:text-blue-500 transition-all duration-300 ease-out" target="_blank" href="https://www.linkedin.com/in/marco-josu%C3%A9-fura-mendoza-270a30212/">
                            <FiLinkedin/>
                        </a>
                    </li>
                    <li>
                        <a className="hover:text-red-500 transition-all duration-300 ease-out" target="_blank" href="/pdfs/cv-marco-fura.pdf">
                            <AiOutlineFilePdf/>
                        </a>
                    </li>
                </ul>
            </nav>
            
            <hr className="w-[80%] my-4 border-gray-400 rounded-lg " />
            <h1>© Copyright 2022, All rights reserved.</h1>
            <p>Developed by Marco Fura</p>
        </footer>
    )
}