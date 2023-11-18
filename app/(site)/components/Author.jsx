import Image from "next/image"
import Link from "next/link"

function Author({name}) {
  return (
    <Link href={'/'} className="flex items-center gap-2 text-primary"><Image className="rounded-full" src='https://picsum.photos/id/360/50' height={50} width={50}/>{name}</Link>
  )
}

export default Author