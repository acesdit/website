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
    <Link
      className="p-5 box-border h-[420px] w-full bg-slate-900 pt-5 flex flex-col justify-between col-span-3 rounded-2xl text-white"
      href={linkTo}
    >
      <p className="uppercase font-semibold text-lg rounded-lg text-black bg-white w-min px-2 py-1">
        Featured
      </p>
      <div>
        <h3 className="font-title uppercase font-medium text-4xl leading-snug">
          {title}
        </h3>
        <p className="font-title font-light text-2xl leading-snug py-2">
          {description}
        </p>
        <time className="font-light text-lg">{creationDate}</time>
      </div>
    </Link>
  )
}

export default BlogCard
