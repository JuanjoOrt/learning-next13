'use client'
import { useSession } from 'next-auth/react'

const STATUS_LOADING = 'loading'


export function LoadingPage ({ children }: { children: React.ReactNode }) {
  const { status } = useSession()
  if (status === STATUS_LOADING) return <div />
  return <div>{children}</div>
}
