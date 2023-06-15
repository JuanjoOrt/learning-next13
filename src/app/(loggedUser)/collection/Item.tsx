
interface Props {
  title: string
}

export default function Item ({ title }: Props) {
  return (
    <div>{title}</div>
  )
}
