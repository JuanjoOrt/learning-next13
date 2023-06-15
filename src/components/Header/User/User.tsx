'use client'
import { useSession } from 'next-auth/react'
import { BiCaretDown, BiCaretUp, BiPowerOff } from "react-icons/bi";
import { useState, useEffect } from 'react'
import { signOut } from 'next-auth/react'

export default function User () {
  const [ show, setShow ] = useState(false)
  const { data: session } = useSession()

  useEffect(() => {
    function docClick(event:any) {
      setShow(false)
    }
    if (show) document.addEventListener("click", docClick);
    return () => {
      document.removeEventListener("click", docClick);
    };
  }, [show]);

  const handleLogOut = (e: any) => {
    e.preventDefault()
    signOut()
  }

  return (
    <div className='header-user'>
      <div className='active' onClick={() => setShow(!show)}>
        { session?.user?.name }
        { show ? <BiCaretUp size={20}/> : <BiCaretDown size={20}/> }
        { show && (
          <div className='menu'>
            <div onClick={handleLogOut}> <BiPowerOff color='red' size={20} /> Log out</div>
          </div>
        ) }
      </div>
    </div>
  )
}
