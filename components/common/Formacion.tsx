import unmsmlogo from '@/public/assets/images/education/unmsmlogo.png'
import ucLogo from '@/public/assets/images/education/logo_uc_front.png'
import Image from 'next/image'
export default function Formacion() {
  return (
    <aside className="grid grid-cols-2  gap-4 p-4 w-full items-center">
      <div className="">
        <Image
          src={unmsmlogo}
          alt="Universidad Nacional Mayor de San Marcos Logo"
        />
      </div>
      <div className="">
        <Image src={ucLogo} alt="UC logo" />
      </div>
    </aside>
  )
}
