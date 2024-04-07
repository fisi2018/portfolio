import Image from 'next/image'
import { IoIosArrowForward } from 'react-icons/io'
import { useState } from 'react'
import { useLang } from '../../stateManagement/contexts/LangContext'
export default function LangButton() {
  const [show, setShow] = useState<boolean>(false)
  const { state, changeLang } = useLang()
  const handleClick = () => {
    show ? setShow(false) : setShow(true)
  }
  return (
    <div className="flex flex-col">
      <button
        onClick={handleClick}
        className={`p-2 flex group items-center px-3  ${show ? 'bg-gray-300 rounded-b-none ' : 'hover:bg-gray-300 bg-gray-400'} transition-all duration-300 ease-out text-sm 2xl:text-xl xl:text-lg text-gray-800 rounded-lg`}
      >
        <div className="flex w-8">
          <Image
            layout="intrinsic"
            src={state.content.panel.langSelected}
            alt=""
          />
        </div>
        <p className="ml-4">{state.lang}</p>
        <span
          className={`flex items-center ml-4 transition-all duration-500 ease-out text-xl ${show ? 'rotate-90 group-hover:-rotate-90 ' : 'group-hover:rotate-90'} `}
        >
          <IoIosArrowForward />
        </span>
      </button>
      <ul className={` overflow-hidden ${show ? ' h-auto' : 'h-0'}`}>
        {state.content.panel.langs.map((el, index) => (
          <li key={index}>
            <button
              onClick={() => {
                setShow(false)
                changeLang(el.lang)
              }}
              className="p-2 flex w-full group items-center px-3 hover:bg-gray-300 transition-all duration-300 ease-out text-sm xl:text-lg 2xl:text-xl bg-gray-400 text-gray-800  "
            >
              <div className="flex w-8">
                <Image layout="intrinsic" src={el.img} alt="" />
              </div>
              <p className="ml-4">{el.lang}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
