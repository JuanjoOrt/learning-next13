'use client'
import './styles-login.scss'
import { signIn, signOut } from "next-auth/react";
import { useState } from 'react'


export default function LoginForm () {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    signIn('credentials', { user, password: pass, redirect: true,  callbackUrl: '/' })
  }

  return (
    <div className='login'>
      <p>Login</p>
      <input type="text" placeholder='Usuario' value={user} onChange={(e) => setUser(e.target.value)}/><br/>
      <input type="password" placeholder='Contraseña' value={pass} onChange={(e) => setPass(e.target.value)}/><br/>
      <button onClick={handleSubmit}>Sign in</button>
    </div>
  )
}
