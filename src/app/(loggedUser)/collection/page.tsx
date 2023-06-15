import { getServerSession, NextAuthOptions } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getCollection } from '@/services/collection'
import Item from '@/app/(loggedUser)/collection/Item'


export default async function Collection() {
  const session: any = await getServerSession(authOptions as any)
  const data = await getCollection(session.user.token)
  console.log(data)
  return (
    <div>
      {data.map((item: any) => <Item key={item.id} title={item.name} />)}
      <div>Collection</div>
    </div>
  )
}
