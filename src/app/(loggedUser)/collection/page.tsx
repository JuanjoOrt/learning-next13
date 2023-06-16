'use client'

import { getCollection } from '@/services/collection'
import Item from '@/app/(loggedUser)/collection/Item'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

export default function Collection() {
  const session: any = useSession()
  const { data } = useSWR('/collection', () => getCollection(session.data.user.token) )

  return (
    <div className='main-page'>
      <div className='collection'>
        {data?.map((item: any) => <Item key={item.id} title={item.name} image={item.image} price={item.price} id={item.id} />)}
      </div>
    </div>
  )
}
