import './collection-styles.scss'
import Image from 'next/image'
import Link from 'next/link'


interface Props {
  title: string,
  image: string,
  price: number,
  id: number
}

export default function Item ({ title, image, price, id }: Props) {
  return (
    <Link href={`/detail/${id}`}>
      <div className='collection-item'>
        <p className='title'>{title}</p>
        <div style={{ height: '200px', position: 'relative' }}>
          <Image src={image} alt="img" fill style={{ objectFit: 'contain' }}/>
        </div>
        <p className='price'>Precio: {price} €</p>
      </div>
    </Link>
  )
}
