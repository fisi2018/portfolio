import { ReactNode } from 'react'
import { useNav } from '../../stateManagement/contexts/NavContext'
import Footer from './Footer'
import Header from './Header'
type Props = {
  children?: ReactNode
}
export default function Layout({ children }: Props) {
  const { nav } = useNav()
  return (
    <section className="overflow-x-hidden dark:bg-gray-900 ">
      <Header />
      <main className={`  ${nav.active ? 'blur-md ' : ''}`}>{children}</main>
      <Footer />
    </section>
  )
}
