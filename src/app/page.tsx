'use client'
import styles from './page.module.css'
import { signOut, useSession } from 'next-auth/react'
import LoginForm from '@/app/login/LoginForm'

const STATUS_LOADING = 'loading'
const STATUS_AUTHENTICATED = 'authenticated'
const STATUS_UNAUTHENTICATED = 'unauthenticated'

export default function Home() {
  const { data: session, status } = useSession()

  const handleSignOut = (e) => {
    e.preventDefault()
    signOut()
  }

  return (
      <main className={styles.main}>
        {status === STATUS_LOADING && <p>Loading...</p>}
        {status === STATUS_UNAUTHENTICATED && <LoginForm />}
        {status === STATUS_AUTHENTICATED && (
          <div>
            <p>Hola {session?.user?.name}</p>
            <button onClick={handleSignOut}>sign out</button>
          </div>
        )}
      </main>
  )
}
