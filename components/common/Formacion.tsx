import unmsmlogo from '../../assets/images/unmsmlogo.png'
import Image from 'next/image'
export default function Formacion() {
  return (
    <aside className="flex flex-col items-center p-4 w-full ">
      <div className="flex relative">
        <Image layout="intrinsic" src={unmsmlogo} />
      </div>
    </aside>
  )
}
