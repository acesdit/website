import Author from '../../components/Author'
import NewsletterCallout from '../../components/NewsletterCallout'
import Image from 'next/image'
import { getPost } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { DateTime } from 'luxon'
import { urlForImage } from '@/sanity/lib/image'
import { getImageDimensions } from '@sanity/asset-utils'
import Link from 'next/link'
import BreadCrumb from '../../components/BreadCrumb'
import { post } from '@/sanity/schemas/post'

/**
 * A component that renders an image with a caption.
 * @param {{ value: SanityImageAsset }} props
 * Properties:
 * - `value`: The Sanity image asset to be rendered.
 * @returns {JSX.Element} A JSX element that renders the image.
 */
const SampleImageComponent = ({ value }) => {
  const { width, height } = getImageDimensions(value)
  return (
    <figure className='w-fit mt-12 mb-12 mx-auto'>
      <img
        className='rounded-xl'
        src={urlForImage(value).width(700).fit('max').auto('format').url()}
        alt={value.alt || ' '}
        loading='lazy'
        style={{
          aspectRatio: width / height,
        }}
      />
      <figcaption className='text-center italic'>{value.alt}</figcaption>
    </figure>
  )
}

/**
 * Generates metadata for a blog post.
 * @param {{ params: { slug: string } }} context - The Next.js page context.
 * @returns {Promise<Object>} A promise that resolves with the metadata object.
 * The metadata object contains the following properties:
 * - `title`: The title of the blog post.
 * - `description`: A summary of the blog post.
 * - `openGraph`: The Open Graph metadata. Contains the following properties:
 *   - `title`: The title of the blog post.
 *   - `description`: A summary of the blog post.
 *   - `url`: The URL of the blog post.
 *   - `siteName`: The name of the website.
 *   - `images`: An array of Open Graph images. Each image contains the following properties:
 *     - `url`: The URL of the image.
 *     - `width`: The width of the image in pixels.
 *     - `height`: The height of the image in pixels.
 *     - `alt`: The alt text for the image.
 *   - `locale`: The locale of the website.
 *   - `type`: The type of the website.
 */
export async function generateMetadata({ params }) {
  const postData = await getPost(params.slug)
  return {
    title: postData.title,
    description: postData.summary,
    openGraph: {
      title: postData.title,
      description: postData.summary,
      url: 'https://aces.dypvp.edu.in/',
      siteName: 'ACES DIT',
      images: [
        {
          url: `https://acesdit.vercel.app/og?title=${postData.title}`,
          width: 1200,
          height: 750,
          alt: postData.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  }
}

/**
 * A Next.js page component that renders a single blog post.
 * @param {Object} params - The Next.js page parameters.
 * @param {string} params.slug - The slug of the blog post.
 * @returns {JSX.Element} A JSX element that renders a single blog post.
 */
async function BlogPost({ params }) {
  const slug = params.slug
  const post = await getPost(slug)
  let authorString = ''
  const numAuthors = post.authors.length
  post.authors.forEach((author, index) => {
    authorString += author.name
    if (index < numAuthors - 2) authorString += ', '
    if (index === numAuthors - 2) authorString += ' & '
  })

  return (
    <>
      <BreadCrumb parent='Blog' parentLink='/blog' child={post.title} />
      <div className='container mx-auto p-4 md:px-6 pt-20'>
        <h1 className='font-title font-medium uppercase text-5xl pb-4'>
          {post.title}
        </h1>
        <div className='flex flex-col md:flex-row gap-4'>
          <time dateTime={post.publishedAt}>
            {DateTime.fromISO(post.publishedAt).toLocaleString(
              DateTime.DATE_MED,
            )}
          </time>
          <p>{authorString}</p>
        </div>
      </div>
      <div className='container mx-auto p-4 md:px-6 flex flex-col md:flex-row gap-6 pb-20'>
        <div className='md:w-3/4 flex flex-col gap-6'>
          <Image
            className='w-full rounded-xl'
            src={urlForImage(post.mainImage)
              .width(737)
              .fit('max')
              .auto('format')
              .url()}
            width={737}
            height={491}
            alt='A rocket'
            priority
          />
          <div className='bg-[#ebebeb] p-6 rounded-xl'>
            <h3 className='font-title uppercase font-medium text-lg text-primary pb-1'>
              TL;DR;
            </h3>
            <p className='italic'>{post.summary}</p>
          </div>

          {/* Block Content */}
          <div className='blog-post-content'>
            <PortableText
              value={post.body}
              components={{
                types: {
                  image: SampleImageComponent,
                },
              }}
            />
          </div>

          <div>
            <h5 className='font-title uppercase leading-none text-lg font-semibold pb-4'>
              Authors
            </h5>
            <hr className='border-2 border-black mb-4' />
            <div className='flex gap-3 flex-wrap items-center'>
              {post.authors.map((author) => {
                return (
                  <Author
                    key={author.name}
                    name={author.name}
                    slug={author.slug}
                    imageUrl={
                      author.slug
                        ? urlForImage(author.image).width(50).height(50).url()
                        : null
                    }
                  />
                )
              })}
            </div>
          </div>
        </div>
        <div className='md:w-1/4'>
          <div className='sticky top-[80px]'>
            <NewsletterCallout />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPost
