'use client'
import { signIn, signOut } from "next-auth/react";


export default function LoginForm () {

  const handleSubmit = (e) => {
    e.preventDefault()
    signIn('credentials', { user: 'test', password: 'testPass', redirect: true,  callbackUrl: '/' })
  }

  const handleSignOut = (e) => {
    e.preventDefault()
    signOut()
  }

  return (
    <div>
      <form action="">
        <input type="text" placeholder='user'/><br/>
        <input type="password" placeholder='pass'/><br/>
        <button onClick={handleSubmit}>Click</button>
        <button onClick={handleSignOut}>LOGOUT</button>
      </form>
    </div>
  )
}
