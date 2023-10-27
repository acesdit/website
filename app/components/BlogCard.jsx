import Image from 'next/image'
import Link from 'next/link'

export const BlogCard = ({
  title,
  imageURL,
  description,
  creationDate,
  linkTo,
}) => {
  return (
    <Link className='block box-border' href={linkTo}>
    <article className="border-[1px] border-solid border-black overflow-hidden rounded-2xl h-full box-border">
      <Image alt='To be changed' className="w-full" src={imageURL} height={300} width={422} />
      <div className="p-5 box-border">
          <h3 className="font-title uppercase font-medium text-3xl leading-snug">
            {title}
          </h3>
          <p className="font-title font-light text-lg leading-snug py-2">
            {description}
          </p>
        <time className="font-light text-lg">{creationDate}</time>
      </div>
    </article>
    </Link>
  )
}

export default BlogCard
