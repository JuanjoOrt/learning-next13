'use client'
import styles from './page.module.css'
import { useSession } from 'next-auth/react'
import LoginForm from '@/app/login/LoginForm'


export default function Home() {
  const { data: session } = useSession()
  console.log(session)

  return (
      <main className={styles.main}>
        <LoginForm />
      </main>
  )
}
