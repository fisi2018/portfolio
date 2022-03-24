import { AiOutlineFolderOpen } from "react-icons/ai";
import {FiGithub} from "react-icons/fi";
import { Project } from "../../interfaces/project";

export default function ProjectCard({project}:{project:Project}){
    return(
       <div key={project._id} className="flex rounded-lg cursor-pointer transition-all duration-300 ease-out hover:-translate-y-4 flex-col justify-between p-4 bg-gray-100 " >
                <article className="flex justify-between" >
                    <span className="flex justify-center text-5xl items-center" >
                        <AiOutlineFolderOpen/>
                    </span>
                    <a className="text-2xl hover:text-purple-700 transition-all duration-300 ease-out " target="_blank" href={project.urlDemo}>
                        <FiGithub/>
                    </a>
                </article>
                <div>
                    <h2 className="font-semibold text-lg" >{project.title}</h2>
                    <p className="text-sm" >{project.description}</p>
                </div>
                <p className="font-light" >{project.techs}</p>
            </div>
    )
}