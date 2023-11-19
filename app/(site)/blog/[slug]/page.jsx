import Author from '../../components/Author'
import NewsletterCallout from '../../components/NewsletterCallout'
import Image from 'next/image'
import { getPost } from '@/sanity/lib/client'
import { PortableText } from '@portabletext/react'
import { DateTime } from 'luxon'
import { urlForImage } from '@/sanity/lib/image'
import { getImageDimensions } from '@sanity/asset-utils'

const SampleImageComponent = ({ value }) => {
  const { width, height } = getImageDimensions(value)
  return (
    <figure className="w-fit mt-12 mb-12 mx-auto">
      <img
        className="rounded-xl"
        src={urlForImage(value).width(700).fit('max').auto('format').url()}
        alt={value.alt || ' '}
        loading="lazy"
        style={{
          aspectRatio: width / height,
        }}
      />
      <figcaption className='text-center italic'>{value.alt}</figcaption>
    </figure>
  )
}

async function BlogPost({ params }) {
  const slug = params.slug

  const post = await getPost(slug)

  return (
    <>
      <div className="hero-container nav-target">
        <main className="hero-bg">
          <div className="container mx-auto p-4 md:px-6">
            <div className="flex items-center pt-20 pb-4 text-white">
              <span className="text-lg">
                <span className="uppercase font-title font-medium">Blog /</span>{' '}
                {post.title}
              </span>
            </div>
          </div>
        </main>
      </div>

      <div className="container mx-auto p-4 md:px-6 pt-20">
        <h1 className="font-title font-medium uppercase text-5xl pb-4">
          {post.title}
        </h1>
        <div>
          <time dateTime={post.publishedAt} className="pr-16">
            {DateTime.fromISO(post.publishedAt).toLocaleString(
              DateTime.DATE_MED
            )}
          </time>
          <span>Jatin Sharma & Anushka Sao</span>
        </div>
      </div>

      <div className="container mx-auto p-4 md:px-6 flex flex-col md:flex-row gap-6 pb-20">
        <div className="md:w-3/4 flex flex-col gap-6">
          <Image
            className="w-full rounded-xl"
            // src="/images/blogimg.png"
            src={urlForImage(post.mainImage).width(737).fit('max').auto('format').url()}
            width={737}
            height={491}
            alt="A rocket"
          />
          <div className="bg-[#ebebeb] p-6 rounded-xl">
            <h3 className="font-title uppercase font-medium text-lg text-primary pb-1">
              TL;DR;
            </h3>
            <p className="italic">{post.summary}</p>
          </div>

          {/* Block Content */}
          <div className="blog-post-content">
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
            <h5 className="font-title uppercase leading-none text-lg font-semibold pb-4">
              Authors
            </h5>
            <hr className="border-2 border-black mb-4" />
            <div className="flex gap-6 flex-wrap">
              <Author name="Akshay Bade" />
              <Author name="Maithili Kulkarni" />
              <Author name="Prakhar Pandey" />
              <Author name="Sahil Srinivas" />
            </div>
          </div>
        </div>
        <div className="md:w-1/4">
          <NewsletterCallout />
        </div>
      </div>
    </>
  )
}

export default BlogPost
