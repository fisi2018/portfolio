import MoveTitle from "../components/common/MoveTitle";
import Layout from "../components/layout";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import { useLang } from "../stateManagement/contexts/LangContext";

export default function Contacto(){
    const {state}=useLang();
    return(
        <Layout>
            <MoveTitle title={state.content.pages.contact.moveTitle} />
            <div className="flex flex-col" >
                <section className="min-h-screen flex justify-center items-center z-30" >
                    <h1 className="w-[40rem] text-2xl dark:text-white " >{state.content.pages.contact.title}</h1>
                </section>
                <section className="min-h-screen flex items-start justify-around p-4 z-30 " >
                    <form className="flex dark:bg-gray-800 rounded-xl dark:shadow-sky-500 shadow-2xl flex-col p-12 pb-6 bg-white "  >
                        <h2 className="mb-4 text-3xl font-bold uppercase text-gray-500 dark:text-gray-200 " >{state.content.pages.contact.form.title}</h2>
                        <article className="relative flex my-4  " >
                        <input className="p-1 dark:text-white bg-transparent w-full peer pt-0  outline-0 focus:border-black dark:focus:border-white transition-all duration-300 ease-out border-b-2 border-gray-400" name="name"  type="text" />
                        <span className="absolute pt-0 transition-all duration-500 ease-out p-1 top-0 text-gray-400 peer-focus:-translate-y-full peer-focus:p-0 peer-focus:text-xs peer-focus:text-black dark:peer-focus:text-white " >{state.content.pages.contact.form.name}</span>
                        </article>
                        <article className="relative flex my-4 " >
                        <input name="subject" className="p-1 w-full dark:text-white bg-transparent peer pt-0 outline-0 focus:border-black dark:focus:border-white transition-all duration-300 ease-out border-b-2 border-gray-400"  type="text" />
                        <span className="absolute pt-0 transition-all duration-500 ease-out p-1 top-0 text-gray-400 peer-focus:-translate-y-full peer-focus:p-0 peer-focus:text-xs peer-focus:text-black dark:peer-focus:text-white " >{state.content.pages.contact.form.subject}</span>
                        </article>
                        <article className="relative flex my-4 " >
                        <input name="subject" className="p-1 peer dark:text-white bg-transparent dark:focus:border-white w-full pt-0 outline-0 focus:border-black  transition-all duration-300 ease-out border-b-2 border-gray-400"  type="email" />
                        <span className="absolute pt-0 transition-all dark:peer-focus:text-white duration-500 ease-out p-1 top-0 text-gray-400 peer-focus:-translate-y-full peer-focus:p-0 peer-focus:text-xs peer-focus:text-black" >{state.content.pages.contact.form.email}</span>
                        </article>
                        <article className="relative flex my-4" >
                        <textarea className="p-1 peer dark:focus:border-white dark:text-white bg-transparent w-full pt-0 outline-0 focus:border-black  transition-all duration-300 ease-out border-b-2 border-gray-400"  name="message"  cols={20} rows={5}></textarea>
                        <span className="absolute pt-0 transition-all duration-500 ease-out p-1 top-0 text-gray-400 peer-focus:-translate-y-full peer-focus:p-0 peer-focus:text-xs peer-focus:text-black dark:peer-focus:text-white " >{state.content.pages.contact.form.message}</span>
                        </article>
                       
                        <button className=" hover:bg-sky-400  group font-bold mt-8 flex items-center justify-center transition-all duration-300 ease-out  bg-sky-500 text-white tracking-widest py-2 px-6 uppercase " type="submit" >
                            <p>
                            {state.content.pages.contact.form.button}
                            </p>
                            <span className="flex items-center ml-4 -rotate-90 group-hover:rotate-0 transition-all duration-300 ease-out text-xl" >
                                <AiOutlineSend/>
                            </span>
                            </button>

                    </form>
                    <div className="dark:text-white" >
                        <h2 className="text-2xl" >{state.content.pages.contact.description} </h2>
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