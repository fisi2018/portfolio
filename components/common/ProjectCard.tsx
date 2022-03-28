import { AiOutlineFolderOpen } from "react-icons/ai";
import {FiGithub} from "react-icons/fi";
import { Project } from "../../interfaces/project";
import { Lang } from "../../types/stateTypes";

export default function ProjectCard({project,lang}:{project:Project,lang:Lang}){
    return(
       <a target="_blank" href={project.urlDemo} className="flex dark:bg-gray-800 group dark:hover:shadow-sky-500 dark:hover:shadow-2xl rounded-lg  transition-all duration-300 ease-out hover:-translate-y-4 flex-col justify-between hover:shadow-sky-300 hover:shadow-2xl p-4 bg-gray-600 " >
                <article className="flex justify-between items-center" >
                    <span className="flex justify-center text-gray-200 group-hover:text-sky-500 transition-all duration-500 ease-out text-5xl items-center" >
                        <AiOutlineFolderOpen/>
                    </span>
                    <a className="text-2xl hover:text-purple-500 text-gray-200 transition-all duration-300 ease-out " target="_blank" href={project.urlGit}>
                        <FiGithub/>
                    </a>
                </article>
                <div>
                    <h2 className="font-semibold text-base 2xl:text-2xl md:text-lg text-gray-100 transition-all duration-500 ease-out group-hover:text-sky-500 " >{project.title[lang]}</h2>
                    <p className="md:text-sm mt-1 mb-3 2xl:text-lg text-xs text-gray-200" >{project.description[lang]}</p>
                </div>
                <p className="font-light text-gray-300 text-xs md:text-base 2xl:text-xl " >{project.techs}</p>
            </a>
    )
}