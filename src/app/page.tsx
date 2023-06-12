'use client'
import styles from './page.module.css'
import { signOut, useSession } from 'next-auth/react'
import LoginForm from '@/app/login/LoginForm'


export default function Home() {
  const { data: session } = useSession()
  console.log(session)

  const handleSignOut = (e) => {
    e.preventDefault()
    signOut()
  }

  return (
      <main className={styles.main}>
        {(!session)
          ? <LoginForm />
          : <div>
              <p>Hola {session.user?.name}</p>
              <button onClick={handleSignOut}>sign out</button>
            </div>
        }
      </main>
  )
}
