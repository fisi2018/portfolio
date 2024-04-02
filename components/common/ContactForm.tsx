import { useForm } from '../../hooks/useForm'
import { AiOutlineSend } from 'react-icons/ai'
import { sendEmail } from '../../utils/fetchData'
import { ContactFormType, StateLang } from '../../types/stateTypes'
import toast, { Toaster } from 'react-hot-toast'
import Loader from './Loader'
import { contactValidation } from '../../utils/validation'
const initForm: ContactFormType = {
  name: '',
  subject: '',
  email: '',
  message: ''
}
type Props = {
  state: StateLang
}
export default function ContactForm({ state }: Props) {
  const { form, handleChange, loading, setLoading, setForm } = useForm(initForm)
  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      setLoading(true)
      const errors = contactValidation(form)
      if (errors.email || errors.message) {
        errors.email && toast.error(errors.email)
        errors.message && toast.error(errors.message)
      } else {
        const data = await sendEmail(form)
        data.error ? toast.error(data.message) : toast.success(data.message)
      }
      setLoading(false)
      setForm(initForm)
    } catch (err) {
      console.log('error submit ', err)
      toast.error('Ha ocurrido un error ')
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex 2xl:text-xl 2xl:w-[45rem] dark:bg-gray-800 rounded-xl dark:shadow-sky-500 shadow-2xl flex-col p-12 pb-6 bg-white "
    >
      <Toaster />
      <h2 className="mb-4 text-3xl font-bold text-center uppercase text-gray-500 dark:text-gray-200 ">
        {state.content.pages.contact.form.title}
      </h2>
      <article className="relative flex my-4  ">
        <input
          onChange={handleChange}
          value={form.name}
          className="p-1 dark:text-white bg-transparent w-full peer pt-0  outline-0 focus:border-black dark:focus:border-white transition-all duration-300 ease-out border-b-2 border-gray-400"
          name="name"
          type="text"
        />
        <span
          className={`absolute pt-0 transition-all duration-500 ease-out p-1 top-0 text-gray-400 ${form.name ? '-translate-y-full p-0 text-xs text-black dark:text-white ' : ' peer-focus:-translate-y-full peer-focus:p-0 peer-focus:text-xs peer-focus:text-black dark:peer-focus:text-white '}  `}
        >
          {state.content.pages.contact.form.name}
        </span>
      </article>
      <article className="relative flex my-4 ">
        <input
          onChange={handleChange}
          value={form.subject}
          name="subject"
          className="p-1 w-full dark:text-white bg-transparent peer pt-0 outline-0 focus:border-black dark:focus:border-white transition-all duration-300 ease-out border-b-2 border-gray-400"
          type="text"
        />
        <span
          className={`absolute pt-0 transition-all duration-500 ease-out p-1 top-0 text-gray-400 ${form.subject ? '-translate-y-full p-0 text-xs text-black dark:text-white ' : ' peer-focus:-translate-y-full peer-focus:p-0 peer-focus:text-xs peer-focus:text-black dark:peer-focus:text-white '}  `}
        >
          {state.content.pages.contact.form.subject}
        </span>
      </article>
      <article className="relative flex my-4 ">
        <input
          name="email"
          onChange={handleChange}
          value={form.email}
          className="p-1 peer dark:text-white bg-transparent dark:focus:border-white w-full pt-0 outline-0 focus:border-black  transition-all duration-300 ease-out border-b-2 border-gray-400"
          type="email"
        />
        <span
          className={`absolute pt-0 transition-all duration-500 ease-out p-1 top-0 text-gray-400 ${form.email ? '-translate-y-full p-0 text-xs text-black dark:text-white ' : ' peer-focus:-translate-y-full peer-focus:p-0 peer-focus:text-xs peer-focus:text-black dark:peer-focus:text-white '}  `}
        >
          {state.content.pages.contact.form.email}
        </span>
      </article>
      <article className="relative flex my-4">
        <textarea
          onChange={handleChange}
          value={form.message}
          className="p-1 peer dark:focus:border-white dark:text-white bg-transparent w-full pt-0 outline-0 focus:border-black  transition-all duration-300 ease-out border-b-2 border-gray-400"
          name="message"
          cols={20}
          rows={5}
        ></textarea>
        <span
          className={`absolute pt-0 transition-all duration-500 ease-out p-1 top-0 text-gray-400 ${form.message ? '-translate-y-full p-0 text-xs text-black dark:text-white ' : ' peer-focus:-translate-y-full peer-focus:p-0 peer-focus:text-xs peer-focus:text-black dark:peer-focus:text-white '}  `}
        >
          {state.content.pages.contact.form.message}
        </span>
      </article>
      {loading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        <button
          className=" hover:bg-sky-400  group font-bold mt-8 flex items-center justify-center transition-all duration-300 ease-out  bg-sky-500 text-white tracking-widest py-2 px-6 uppercase "
          type="submit"
        >
          <p>{state.content.pages.contact.form.button}</p>
          <span className="flex items-center ml-4 -rotate-90 group-hover:rotate-0 transition-all duration-300 ease-out text-xl">
            <AiOutlineSend />
          </span>
        </button>
      )}
    </form>
  )
}
