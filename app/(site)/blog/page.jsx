import BlogCard from '../components/BlogCard'
import FeaturedCard from '../components/FeaturedCard'
import NewsletterCallout from '../components/NewsletterCallout'

import Image from 'next/image'

import { getPosts } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'

async function Page() {
  const posts = await getPosts()
  const DESCRIPTION_LENGTH = 150
  const FEATURED_DESCRIPTION_LENGTH = 200

  return (
    <>
      <div className="hero-container nav-target">
        <main className="hero-bg">
          <div className="container mx-auto p-4 md:px-6">
            <div className="flex items-center pt-20 pb-8 text-white">
              <h1 className="font-title uppercase font-medium text-5xl">
                Blog
              </h1>
            </div>
          </div>
        </main>
      </div>

      <section className="container mx-auto p-4 md:px-6 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 pt-20">
        <FeaturedCard
          title={posts[0].title}
          description={
            posts[0].summary.length > FEATURED_DESCRIPTION_LENGTH
              ? posts[0].summary.slice(0, FEATURED_DESCRIPTION_LENGTH - 1).concat('...')
              : posts[0].summary
          }
          creationDate={posts[0].publishedAt}
          imageURL={urlForImage(posts[0].mainImage).width(800).height(400).url()}
          linkTo={`/blog/${posts[0].slug}`}
        />
        <NewsletterCallout />
      </section>

      <section className="container mx-auto p-4 md:px-6 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 pb-20">
        {posts.slice(1).map((post) => (
          <BlogCard
            key={post._id}
            title={post.title}
            description={
              post.summary.length > DESCRIPTION_LENGTH
                ? post.summary.slice(0, DESCRIPTION_LENGTH - 1)
                : post.summary
            }
            creationDate={post.publishedAt}
            imageURL={urlForImage(post.mainImage).width(422).height(300).url()}
            linkTo={`/blog/${post.slug}`}
          />
        ))}

        <BlogCard
          title="Why You Should Stare At Rocks"
          description="Whereas disregard and contempt for human rights have resulted"
          creationDate="29th Feb 2023"
          imageURL="https://picsum.photos/422/300.jpg"
          linkTo="/blog/something"
        />
        <BlogCard
          title="Why You Should Stare At Rocks"
          description="Whereas disregard and contempt for human rights have resulted"
          creationDate="29th Feb 2023"
          imageURL="https://picsum.photos/422/300.jpg"
          linkTo="/blog/something"
        />
        <BlogCard
          title="Why You Should Stare At Rocks"
          description="Whereas disregard and contempt for human rights have resulted"
          creationDate="29th Feb 2023"
          imageURL="https://picsum.photos/422/300.jpg"
          linkTo="/blog/something"
        />
        <BlogCard
          title="Why You Should Stare At Rocks"
          description="Whereas disregard and contempt for human rights have resulted"
          creationDate="29th Feb 2023"
          imageURL="https://picsum.photos/422/300.jpg"
          linkTo="/blog/something"
        />
        <BlogCard
          title="Why You Should Stare At Rocks"
          description="Whereas disregard and contempt for human rights have resulted"
          creationDate="29th Feb 2023"
          imageURL="https://picsum.photos/422/300.jpg"
          linkTo="/blog/something"
        />
      </section>
    </>
  )
}

export default Page
