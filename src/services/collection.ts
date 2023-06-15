import { fetcher } from '@/services/fetcher'

export function getCollection ( token: string ) {
  return fetcher('https://x8ki-letl-twmt.n7.xano.io/api:tPom_P5B/badcoproducts_private', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
