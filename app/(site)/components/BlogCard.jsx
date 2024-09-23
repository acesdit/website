import Image from 'next/image'
import Link from 'next/link'
import { DateTime } from 'luxon'

/**
 * A component that renders a single blog post as a card.
 * @param {{ title: string, imageURL: string, description: string, creationDate: string, linkTo: string }} props
 * Properties:
 * - `title`: The title of the blog post.
 * - `imageURL`: The URL of the image associated with the blog post.
 * - `description`: A summary of the blog post.
 * - `creationDate`: The date the blog post was published.
 * - `linkTo`: The URL of the blog post.
 * @returns {JSX.Element}
 * A JSX element that renders a single blog post as a card.
 */
export const BlogCard = ({
  title,
  imageURL,
  description,
  creationDate,
  linkTo,
}) => {
  return (
    <Link
      className='block box-border transition-all hover:-translate-y-1 hover:shadow-xl'
      href={linkTo}>
      <article className='border-[1px] border-solid border-black overflow-hidden rounded-2xl h-full box-border'>
        <Image
          alt='To be changed'
          className='w-full'
          src={imageURL}
          height={300}
          width={422}
        />
        <div className='p-5 box-border'>
          <h3 className='font-title uppercase font-medium text-3xl leading-snug line-clamp-2 break-words'>
            {title}
          </h3>
          <p className='font-title font-light text-lg leading-snug py-2'>
            {description}
          </p>
          <time
            dateTime={creationDate}
            className='font-semibold text-primary text-base'>
            {DateTime.fromISO(creationDate).toLocaleString(DateTime.DATE_MED)}
          </time>
        </div>
      </article>
    </Link>
  )
}

export default BlogCard
