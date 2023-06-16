import { fetcher } from '@/services/fetcher'

export async function getCollection ( token: string ) {
  return await fetcher('https://x8ki-letl-twmt.n7.xano.io/api:tPom_P5B/badcoproducts_private', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export function getDetail (token: string, id: number) {
  return fetcher(`https://x8ki-letl-twmt.n7.xano.io/api:tPom_P5B/badcodetails/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
