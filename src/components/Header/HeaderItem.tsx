import './header-styles.scss'
import Link from 'next/link'

interface Props {
  children: string,
  href: string
}

export default function HeaderItem ({ children, href }: Props) {
  return (
    <div className='header-item'>
      <Link href={href}>{children}</Link>
    </div>
  )
}
