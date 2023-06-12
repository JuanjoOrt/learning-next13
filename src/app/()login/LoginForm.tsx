'use client'
import { signIn } from "next-auth/react";
import { useSession } from 'next-auth/react'


export default function LoginForm () {
  const { data: session } = useSession()
  console.log(session)

  return (
    <div>
      <form action="">
        <input type="text" placeholder='user'/><br/>
        <input type="password" placeholder='pass'/><br/>
        <button onClick={() => signIn('credentials', { user: 'test', password: 'testPass' })}>Click</button>
      </form>
    </div>
  )
}
