'use client'

export default function useLogin () {
  const userLogged = localStorage.getItem('user')

  const logging = () => {
    localStorage.setItem('user', '1ui2h3iu1h12h3ol1h2j3oñi1j224yug12hoij312');
  }

  const logOut = () => {
    localStorage.removeItem('user');
  }

  return { userLogged, logging, logOut }
}
