import MoveTitle from '../components/common/MoveTitle'
import ProjectCard from '../components/common/ProjectCard'
import Layout from '../components/layout'
import { DB } from '../consts/db'
import { useLang } from '../stateManagement/contexts/LangContext'
export default function Proyectos() {
  const { state } = useLang()
  return (
    <Layout>
      <MoveTitle title={state.content.pages.projects.moveTitle} />
      <div className="flex flex-col">
        <section className="min-h-screen flex flex-col items-center justify-center dark:text-white w-full z-30 p-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl w-full md:w-[40rem] 2xl:w-[60rem] 2xl:text-5xl text-center  ">
            {state.content.pages.projects.title}
          </h1>
          <p className="font-light text-xl md:text-3xl sm:text-2xl 2xl:text-5xl ">
            -Alejandro Taboada-
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 py-8 px-16 z-30 grid-flow-row gap-8 md:gap-6">
          {DB.map((project) => (
            <ProjectCard
              key={project._id}
              lang={state.lang}
              project={project}
            />
          ))}
        </section>
      </div>
    </Layout>
  )
}
