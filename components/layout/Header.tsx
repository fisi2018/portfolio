import Image from 'next/image'
import logoPortfolio from '../../assets/images/logos/MF.png'
import { useHeader } from '../../hooks/useHeader'
import BurgerButton from '../common/BurgerButton'
import Panel from '../common/Panel'
import Link from 'next/link'
import { PUBLIC_ROUTES } from '../../routes'
export default function Header() {
  const { headerRef } = useHeader()
  return (
    <header
      ref={headerRef}
      className={
        ' flex 2xl:p-8 p-4 justify-between fixed top-0  right-0 z-40 bg-white dark:bg-gray-800 transition-all duration-300 left-0  '
      }
    >
      <Link href={PUBLIC_ROUTES.HOME}>
        <div className="flex overflow-hidden dark:rounded-full ">
          <Image width={48} height={48} src={logoPortfolio} alt="" />
        </div>
      </Link>
      <BurgerButton />
      <Panel />
    </header>
  )
}
