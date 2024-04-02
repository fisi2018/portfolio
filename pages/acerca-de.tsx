/* eslint-disable react/no-unknown-property */
import MoveTitle from '../components/common/MoveTitle'
import Layout from '../components/layout'
import { AiOutlineCheck } from 'react-icons/ai'
import { useScroll } from '../hooks/useScroll'
import logoPrysmo from '../assets/images/logo_prysmo.png'
import Image from 'next/image'
import Skills from '../components/common/Skills'
import Formacion from '../components/common/Formacion'
import { useLang } from '../stateManagement/contexts/LangContext'
export default function About() {
  const { component } = useScroll()
  const { state } = useLang()
  return (
    <Layout>
      <MoveTitle title={state.content.pages.about.moveTitle} />

      <div className="flex flex-col ">
        <section className="min-h-screen flex justify-center items-center p-4 z-30">
          <p className=" w-full sm:w-96 md:w-[40rem] text-base text-center sm:text-xl md:text-2xl 2xl:text-3xl dark:text-white ">
            {state.content.pages.about.title}{' '}
          </p>
        </section>
        <section
          block-scroll="block-scroll"
          className="min-h-screen mt-4 dark:text-white transition-all duration-1000 opacity-0 p-4 flex items-center flex-col 2xl:justify-around lg:flex-row z-30 "
        >
          <div className="sm:p-4">
            <h2 className="sm:text-5xl md:text-6xl 2xl:text-7xl text-4xl text-center lg:text-left tracking-wider  ">
              {state.content.pages.about.skills.subtitle}
            </h2>
            <ul className=" py-2 text-sm sm:text-base xl:text-lg 2xl:text-xl w-full lg:w-[35rem] xl:w-[45rem] 2xl:w-[55rem] ">
              {state.content.pages.about.skills.list.map((el, i) => (
                <li className="my-2 flex " key={i}>
                  <span className="flex items-center justify-center mr-3">
                    <AiOutlineCheck />
                  </span>{' '}
                  <p>{el}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center sm:w-4/5 2xl:flex-none 2xl:w-[45rem] justify-center flex-1">
            <Skills />
          </div>
        </section>
        <section
          block-scroll="block-scroll"
          className="min-h-screen dark:text-white transition-all duration-1000 opacity-0 flex flex-col items-center lg:flex-row-reverse lg:justify-around  p-4 z-30 "
        >
          <div className="sm:p-4">
            <h2 className="text-4xl sm:text-5xl text-center lg:text-left 2xl:text-7xl xl:text-6xl ">
              {state.content.pages.about.experience.subtitle}
            </h2>
            <ul className="text-sm sm:text-base xl:text-lg 2xl:text-xl w-full lg:w-[30rem] xl:w-[40rem] mt-4 ">
              {state.content.pages.about.experience.list.map((el, i) => (
                <li className="flex my-2" key={i}>
                  <span className="flex items-center justify-center mr-3">
                    <AiOutlineCheck />
                  </span>
                  <p>{el}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-center sm:flex-none sm:w-4/5 lg:w-[30rem] 2xl:w-[40rem]  ">
            <Formacion />
          </div>
        </section>
        <section className="min-h-screen relative p-4 z-30 flex flex-col dark:text-white items-center">
          <div
            ref={component}
            className="flex flex-col items-center w-full transition-all duration-1000 ease-out -translate-x-full "
          >
            <h2 className="text-2xl 2xl:text-4xl text-center sm:text-3xl">
              {state.content.pages.about.prysmo.subtitle}
            </h2>
            <div className="flex bg-gray-600 w-48 h-48 p-4 justify-center dark:bg-transparent my-6 rounded-full">
              <Image layout="intrinsic" src={logoPrysmo} />
            </div>

            <p className=" w-full sm:w-96 xl:w-96 sm:text-base text-sm 2xl:text-xl text-center">
              {state.content.pages.about.prysmo.description}
            </p>

            <a
              target="_blank"
              href="https://prysmosolutions.com"
              className="before:transition-all before:ease-out before:duration-500 hover:before:w-[105%] hover:before:border-2 hover:before:h-[115%] before:block mt-8 before:w-1/2 before:h-1/2 before:border-t-2 before:border-l-2 before:absolute relative py-3 px-6 flex before:top-0 before:left-0 dark:before:border-white before:border-gray-800
                after:block after:transition-all after:ease-out after:duration-500 hover:after:w-[105%] hover:after:h-[115%] hover:after:border-2 after:w-1/2 after:h-1/2 after:border-b-2 after:border-r-2 after:absolute after:bottom-0 after:right-0 after:border-gray-800 dark:after:border-white "
              rel="noreferrer"
            >
              <p className="z-30 2xl:text-xl bg-white dark:bg-gray-800 ">
                {state.content.pages.about.prysmo.button}
              </p>
            </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}
