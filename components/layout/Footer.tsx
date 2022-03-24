import { AiOutlineFilePdf } from "react-icons/ai";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer():JSX.Element{
    return(
        <footer className="p-4 bg-gray-800 flex flex-col items-center text-gray-200 " >
            <nav className="w-full sm:w-40" >
                <ul className="flex justify-between text-xl " >
                    <li>
                        <a className="hover:text-purple-500 transition-all duration-300 ease-out" href="">
                            <FiGithub/>
                        </a>
                    </li>
                    <li>
                        <a className="hover:text-sky-500 transition-all duration-300 ease-out" href="">
                            <FiFacebook/>
                        </a>
                    </li>
                    <li>
                        <a className="hover:text-blue-500 transition-all duration-300 ease-out" href="">
                            <FiLinkedin/>
                        </a>
                    </li>
                    <li>
                        <a className="hover:text-red-500 transition-all duration-300 ease-out" href="">
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