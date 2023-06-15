'use client'
import styles from './page.module.css'
import { signOut } from 'next-auth/react'

export default function Home() {

  const handleSignOut = (e) => {
    e.preventDefault()
    signOut()
  }

  return (
      <main className={styles.main}>
        Home
        <button onClick={handleSignOut}>sign out</button>
      </main>
  )
}
