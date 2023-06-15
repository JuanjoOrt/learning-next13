import { getToken } from 'next-auth/jwt'
import { HttpOptions } from 'openid-client'

export function fetcher (url: string, options: any) {
  return fetch(url, options)
    .then(response => {
      if (!response.ok) return Promise.reject(response)
      return response.json()
    })
}
