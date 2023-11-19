import Image from "next/image"
import Link from "next/link"

function Author({name, slug, imageUrl}) {
  return (
    <Link href={'/'} className="flex items-center gap-2 text-primary"><Image className="rounded-full" src={imageUrl} height={50} width={50}/>{name}</Link>
  )
}

export default Author