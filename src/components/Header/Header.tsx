import './header-styles.scss'
import Image from 'next/image'
import logo from '@/../public/vercel.svg'
import HeaderItem from '@/components/Header/HeaderItem'
import Link from 'next/link'
import User from '@/components/Header/User/User'

export default function Header () {
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
        <User />
      </div>
    </header>
  )
}
