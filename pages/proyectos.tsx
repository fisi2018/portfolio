import Link from "next/link";
import { AiOutlineFolderOpen } from "react-icons/ai";
import MoveTitle from "../components/common/MoveTitle";
import Layout from "../components/layout";

export default function Proyectos(){
    return(
    <Layout>
        <MoveTitle title={"Mis proyectos"} />
        <div className="flex flex-col">
        <section className="min-h-screen flex items-center justify-center w-full z-30 p-4" >
                <h1 className="text-3xl w-[40rem] text-center  " >Cada proyecto se ha realizado con las tecnologías descritas. Se puede visualizar una demo en cada uno.</h1>
        </section>
        <section className="grid grid-cols-3 p-4 z-30 grid-flow-row gap-4" >
            <div className="flex flex-col p-4 bg-gray-100 " >
                <article className="flex justify-between" >
                    <span className="flex justify-center text-5xl items-center" >
                        <AiOutlineFolderOpen/>
                    </span>
                    <a target="_blank" href="https://www.google.com">
                        Ver demo
                    </a>
                </article>
                <div>
                    <h2 className="font-semibold text-lg" >Ecommerce Importadora A&F</h2>
                    <p className="text-sm" >Plataforma para realizar pedidos de prendas de vestir al por mayor y al detalle mediante una API REST. Cuenta con una parte administrativa en una SPA.</p>
                </div>
                <p className="font-light" >Nextjs, Reactjs, Nodejs, Express, MongoDB</p>
            </div>
        </section>
        </div>
    </Layout>

    )
}