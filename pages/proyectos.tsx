import Link from "next/link";
import { AiOutlineFolderOpen } from "react-icons/ai";
import MoveTitle from "../components/common/MoveTitle";
import ProjectCard from "../components/common/ProjectCard";
import Layout from "../components/layout";
import {DB} from "../consts/db";
export default function Proyectos(){
    return(
    <Layout>
        <MoveTitle title={"Mis proyectos"} />
        <div className="flex flex-col">
        <section className="min-h-screen flex flex-col items-center justify-center w-full z-30 p-4" >
                <h1 className="text-3xl w-[40rem] text-center  " >"Si puedes imaginarlo, puedes programarlo. "</h1>
                <p className="font-light text-3xl" >-Alejandro Taboada-</p>
        </section>
        <section className="grid grid-cols-3 p-4 z-30 grid-flow-row gap-6" >
            {DB.map((project)=>(
                <ProjectCard key={project._id} project={project} />
            ))}
        </section>
        </div>
    </Layout>

    )
}