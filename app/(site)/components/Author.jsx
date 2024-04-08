import Image from 'next/image'
import Link from 'next/link'

function Author({ name, slug, imageUrl }) {
  if (slug) {
    return (
      <Link
        href={`/members/${slug}`}
        className='flex items-center gap-2 text-primary border-[1px] border-black py-2 px-3 h-full rounded-full'>
        {imageUrl && (
          <Image
            className='rounded-full'
            src={imageUrl}
            height={32}
            width={32}
          />
        )}
        {name}
      </Link>
    )
  } else {
    return (
      <span className='flex items-center gap-2 text-primary border-[1px] border-black py-2 px-3 h-full rounded-full'>
        {name}
      </span>
    )
  }
}

export default Author
