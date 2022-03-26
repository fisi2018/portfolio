import { AiOutlineFolderOpen } from "react-icons/ai";
import {FiGithub} from "react-icons/fi";
import { Project } from "../../interfaces/project";

export default function ProjectCard({project}:{project:Project}){
    return(
       <a target="_blank" href={project.urlDemo} className="flex group rounded-lg cursor-pointer transition-all duration-300 ease-out hover:-translate-y-4 flex-col justify-between p-4 bg-gray-800 " >
                <article className="flex justify-between" >
                    <span className="flex justify-center text-gray-200 group-hover:text-purple-500 transition-all duration-500 ease-out text-5xl items-center" >
                        <AiOutlineFolderOpen/>
                    </span>
                    <a className="text-2xl hover:text-purple-500 text-gray-200 transition-all duration-300 ease-out " target="_blank" href={project.urlGit}>
                        <FiGithub/>
                    </a>
                </article>
                <div>
                    <h2 className="font-semibold text-lg text-gray-100 transition-all duration-500 ease-out group-hover:text-purple-500 " >{project.title}</h2>
                    <p className="text-sm text-gray-200" >{project.description}</p>
                </div>
                <p className="font-light text-gray-300" >{project.techs}</p>
            </a>
    )
}