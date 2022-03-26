import MoveTitle from "../components/common/MoveTitle";
import Layout from "../components/layout";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";

export default function Contacto(){
    return(
        <Layout>
            <MoveTitle title={"Contacto"} />
            <div className="flex flex-col" >
                <section className="min-h-screen flex justify-center items-center z-30" >
                    <h1 className="w-[40rem] text-2xl" >Siempre abierto para escuchar nuevas consultas y oportunidades. Para cualquier consulta puedes ponerte en contacto conmigo por cualquiera de los medios mostrados abajo.</h1>
                </section>
                <section className="min-h-screen flex items-start justify-around p-4 z-30 " >
                    <form className="flex rounded-xl shadow-2xl flex-col p-12 bg-white "  >
                        <h2 className="mb-4 text-3xl font-bold uppercase text-gray-500" >¿Tienes alguna pregunta?</h2>
                        <article className="relative flex my-4  " >
                        <input className="p-1 bg-transparent w-full peer pt-0  outline-0 focus:border-black  transition-all duration-300 ease-out border-b-2 border-gray-400" name="name"  type="text" />
                        <span className="absolute pt-0 transition-all duration-500 ease-out p-1 top-0 text-gray-400 peer-focus:-translate-y-full peer-focus:p-0 peer-focus:text-xs peer-focus:text-black" >Nombre</span>
                        </article>
                        <article className="relative flex my-4 " >
                        <input name="subject" className="p-1 w-full bg-transparent peer pt-0 outline-0 focus:border-black  transition-all duration-300 ease-out border-b-2 border-gray-400"  type="text" />
                        <span className="absolute pt-0 transition-all duration-500 ease-out p-1 top-0 text-gray-400 peer-focus:-translate-y-full peer-focus:p-0 peer-focus:text-xs peer-focus:text-black" >Asunto</span>
                        </article>
                        <article className="relative flex my-4 " >
                        <input name="subject" className="p-1 peer bg-transparent w-full pt-0 outline-0 focus:border-black  transition-all duration-300 ease-out border-b-2 border-gray-400"  type="email" />
                        <span className="absolute pt-0 transition-all duration-500 ease-out p-1 top-0 text-gray-400 peer-focus:-translate-y-full peer-focus:p-0 peer-focus:text-xs peer-focus:text-black" >Correo</span>
                        </article>
                        <article className="relative flex my-4" >
                        <textarea className="p-1 peer bg-transparent w-full pt-0 outline-0 focus:border-black  transition-all duration-300 ease-out border-b-2 border-gray-400"  name="message"  cols={20} rows={5}></textarea>
                        <span className="absolute pt-0 transition-all duration-500 ease-out p-1 top-0 text-gray-400 peer-focus:-translate-y-full peer-focus:p-0 peer-focus:text-xs peer-focus:text-black" >Mensaje</span>
                        </article>
                        <article className="flex justify-center items-center" >
                        <button className=" border-[1.5px] hover:bg-gray-800 hover:text-white transition-all duration-300 ease-out border-gray-800 py-2 px-6 rounded-3xl " type="submit" >Enviar</button>

                        </article>
                    </form>
                    <div>
                        <h2 className="text-2xl" >Puedes contactarme también por: </h2>
                        <ul className="text-xl" >
                            <li className="flex my-3 " >
                                <span className="flex justify-center mr-2 items-center" >
                                    <HiOutlineMail/>
                                </span>
                                <p>marco.fura@unmsm.edu.pe</p>
                            </li>
                            <li className="flex my-3 " >
                                <span className="flex justify-center mr-2 items-center" >
                                    <HiOutlineMail/>
                                </span>
                                <p>mfura@prysmosolutions.com</p>
                            </li>
                            <li className="flex my-3" >
                                <span className="flex justify-center mr-2 items-center" >
                                    <BsTelephone/>
                                </span>
                                <p>+51 945660575</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </Layout>
    )
}