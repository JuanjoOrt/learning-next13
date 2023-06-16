import { getDetail } from '@/services/collection'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Image from 'next/image'
import './detail-styles.scss'

export default async function Detail ({ params: { id } }) {
  const session: any = await getServerSession(authOptions as any)
  const data = await getDetail(session.user.token, id)
  console.log(data)
  return (
    <div  className='main-page'>
      <div className='detail'>
        <div>{data.name}</div>
        <div>{data.description}</div>
        <div>precio: {data.price} €</div>
        <div>
          {data.imageGallery.map(image => <Image key={image} width={200} height={250} alt='image' src={image} />)}
        </div>
      </div>
    </div>
  )
}
