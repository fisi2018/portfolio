import MoveTitle from '../components/common/MoveTitle'
import Layout from '../components/layout'
import { HiOutlineMail } from 'react-icons/hi'
import { BsTelephone } from 'react-icons/bs'
import { useLang } from '../stateManagement/contexts/LangContext'
import ContactForm from '../components/common/ContactForm'

export default function Contacto() {
  const { state } = useLang()

  return (
    <Layout>
      <MoveTitle title={state.content.pages.contact.moveTitle} />
      <div className="flex flex-col">
        <section className="min-h-screen flex justify-center items-center z-30">
          <h1 className="md:w-[40rem] 2xl:w-[50rem] w-full text-lg text-center 2xl:text-3xl md:text-2xl dark:text-white ">
            {state.content.pages.contact.title}
          </h1>
        </section>
        <section className="min-h-screen flex p-0 items-center xl:items-start flex-col xl:flex-row justify-around xl:p-4 z-30 ">
          <ContactForm state={state} />
          <div className="dark:text-white p-4 mt-6 xl:m-0">
            <h2 className="md:text-2xl text-lg ">
              {state.content.pages.contact.description}{' '}
            </h2>
            <ul className="md:text-xl text-base">
              <li className="flex my-3 ">
                <span className="flex justify-center mr-2 items-center">
                  <HiOutlineMail />
                </span>
                <p>marco.fura@unmsm.edu.pe</p>
              </li>
              <li className="flex my-3 ">
                <span className="flex justify-center mr-2 items-center">
                  <HiOutlineMail />
                </span>
                <p>mfura@prysmosolutions.com</p>
              </li>
              <li className="flex my-3">
                <span className="flex justify-center mr-2 items-center">
                  <BsTelephone />
                </span>
                <p>+51 912219330</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}
