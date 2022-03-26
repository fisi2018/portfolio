import MoveTitle from "../components/common/MoveTitle";
import Layout from "../components/layout";
import {AiOutlineCheck} from "react-icons/ai";
import { useScroll } from "../hooks/useScroll";
import logoPrysmo from "../assets/images/logo_prysmo.png";
import Image from "next/image";
import Skills from "../components/common/Skills";
import Formacion from "../components/common/Formacion";
export default function About(){
    const{component} =useScroll();
    return(
        <Layout>
            <MoveTitle title={"Acerca de mí"} />
           
            <div className="flex flex-col ">

            <section className="min-h-screen flex justify-center items-center p-4 z-30" >
                <p className="w-[40rem] text-2xl " >Mi nombre es Marco Josué Fura Mendoza, soy un desarrollador fullstack MERN con Nextjs y Typescript. Apasionado por la programación, gestión y en resolver problemas con soluciones digitales. </p>
            </section>
            <section block-scroll="block-scroll" className="min-h-screen mt-4 transition-all duration-1000 opacity-0 p-4 flex z-30 " >
                <div  >
                <h2 className="text-6xl tracking-wider  " >Habilidades</h2>
                <ul className=" py-2 text-lg  w-[45rem] " >
                    <li className="my-2 flex " >
                        <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span> <p  >HTML, CSS, JavaScript, programación funcional y orientada a objetos (POO).</p>
                    </li>
                    <li className="my-2 flex">
                         <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span><p>Reactjs (Manejo de hooks personalizados, Contexts, useReducer, variables de entorno, request mediante Fetch, Axios, React Router).</p>
                    </li>
                    <li className="my-2 flex">
                        <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span> <p>Nextjs (ServerSideRendering, StaticSiteGeneration, optimización del SEO, uso de style jsx, useRouter, integración con Typescript, buenas prácticas y estructura de ficheros) </p>
                    </li>
                    <li className="my-2 flex">
                        <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span> <p>Autenticación y autorización por el front-end con NextAuthjs, Firebase y por el back-end con JWT(JsonWebToken) mediante middlewares. </p>
                    </li>
                    <li className="my-2 flex">
                         <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span><p>Responsive design usando un paradigma first mobile, media queries. Estilos mediante CSS puro, Bootstrap, Tailwind.</p>
                    </li>
                    <li className="my-2 flex">
                         <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span><p>Web scrapping con Puppetear</p>
                    </li>
                    <li className="my-2 flex">
                        <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span> <p>Construcción de API REST con buenas prácticas y arquitectura MVC ocupando Nodejs, Express, MongoDB, Mongoose, MySQL.</p>
                    </li>
                    <li className="my-2 flex ">
                        <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span> <p>Conocimientos básicos en C++, POO en Java, patrones de diseño, metodologías ágiles (SCRUM), Python, PHP y Postman para realizar peticiones.</p>
                    </li>
                </ul>
                </div>
                <div className="flex items-center justify-center flex-1" >
                    <Skills/>
                </div>
            </section>
            <section block-scroll="block-scroll" className="min-h-screen transition-all duration-1000 opacity-0 flex flex-row-reverse p-4 z-30 " >
                <div  >
                    <h2 className=" text-6xl " >Formación Profesional</h2>
                    <ul className="text-lg w-[40rem] " >
                        <li className="flex my-2" >
                            <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span>
                            <p>

                            Formación en Ingeniería de Software en la Universidad Nacional Mayor de San Marcos (2017 - Actualidad)
                            </p>
                            </li>
                        <li className="flex my-2" >
                            <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span>
                            <p>

                            Inglés intermedio en el Centro de idiomas de la UNMSM
                            </p>
                        </li>
                        <li className="flex my-2" >
                            <span className="flex items-center justify-center mr-3" ><AiOutlineCheck/></span>
                            <p>
                                Fundación y gerencia de Prysmo Solutions hasta la actualidad.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="flex-1" >
                    <Formacion/>
                </div>
            </section>
            <section className="min-h-screen relative p-4 z-30 flex flex-col items-center" >
                <div ref={component} className="flex flex-col items-center w-full transition-all duration-1000 ease-out -translate-x-full " >

                <h2 className="text-3xl" >¿Qué es Prysmo Solutions?</h2>
                <div className="flex bg-gray-600 p-4 my-6 rounded-full" >

                <Image width={80} height={80} src={logoPrysmo} />
                </div>

                <p className="w-96 text-center" >Empresa encargada en el desarrollo de sitios web para startups, negocios no digitalizados y todo tipo de proyectos en general con diferentes tecnologías.</p>
                
                <a target="_blank" href="https://prysmosolutions.com" className="before:transition-all before:ease-out before:duration-500 hover:before:w-[105%] hover:before:border-2 hover:before:h-[115%] before:block mt-8 before:w-1/2 before:h-1/2 before:border-t-2 before:border-l-2 before:absolute relative py-3 px-6 flex before:top-0 before:left-0 before:border-gray-800 
                after:block after:transition-all after:ease-out after:duration-500 hover:after:w-[105%] hover:after:h-[115%] hover:after:border-2 after:w-1/2 after:h-1/2 after:border-b-2 after:border-r-2 after:absolute after:bottom-0 after:right-0 after:border-gray-800 " >
                    <p className="z-30 bg-white" >

                    Visitar página
                    </p>
                </a>
                </div>
            </section>
            </div>
         
        
        </Layout>
    )
}