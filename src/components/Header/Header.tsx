import './header-styles.scss'
import Image from 'next/image'
import logo from '@/../public/vercel.svg'
import HeaderItem from '@/components/Header/HeaderItem'
import Link from 'next/link'
import User from '@/components/Header/User/User'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function Header () {
  const session: any = await getServerSession(authOptions as any)
  console.log()

  return (
    <header className='header'>
      <div className='header-logo'>
        <Link href='/'>
          <Image src={logo} width={130} alt='logo' />
        </Link>
      </div>
      <div className='header-content'>
        <HeaderItem href='/collection'>Collection</HeaderItem>
        <HeaderItem href='/form'>Form</HeaderItem>
        {session.user.rol === 'admin' && <HeaderItem href='/admin'>Admin</HeaderItem>}
        <User />
      </div>
    </header>
  )
}
