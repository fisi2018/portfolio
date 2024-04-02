import { useTitle } from '../../hooks/useTitle'
type Props = {
  title: string
}
export default function MoveTitle({ title }: Props) {
  const { titleMov } = useTitle()
  return (
    <div
      ref={titleMov}
      className={
        'fixed left-0 top-1/2 w-full  transition-all duration-700 ease-out translate-x-0 uppercase text-5xl sm:text-6xl  md:text-7xl lg:text-8xl xl:text-9xl font-bold dark:text-gray-600 text-gray-300'
      }
    >
      <h1 className="text-center sm:text-left ">{title}</h1>
    </div>
  )
}
