import BlogCard from '../components/BlogCard'
import FeaturedCard from '../components/FeaturedCard'
import NewsletterCallout from '../components/NewsletterCallout'

import { getPosts } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import Header from '../components/Header'

// Page title
export const metadata = {
  title: 'Blog | ACES DIT',
}

/**
 * A Next.js page that displays all blog posts in a grid. The most recent post
 * is displayed as a featured card, and the rest of the posts are displayed as
 * smaller cards below.
 *
 * @returns {JSX.Element} A JSX element that renders the blog page.
 */
async function Page() {
  const posts = await getPosts()
  const DESCRIPTION_LENGTH = 150
  const FEATURED_DESCRIPTION_LENGTH = 200

  return (
    <>
      <Header title='Blog' />

      <section className='container mx-auto p-4 md:px-6 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 pt-20'>
        <FeaturedCard
          title={posts[0].title}
          description={
            posts[0].summary.length > FEATURED_DESCRIPTION_LENGTH
              ? posts[0].summary
                  .slice(0, FEATURED_DESCRIPTION_LENGTH - 1)
                  .concat('...')
              : posts[0].summary
          }
          creationDate={posts[0].publishedAt}
          imageURL={urlForImage(posts[0].mainImage)
            .width(800)
            .height(400)
            .url()}
          linkTo={`/blog/${posts[0].slug}`}
        />
        <NewsletterCallout />
      </section>

      <section className='container mx-auto p-4 md:px-6 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 pb-20'>
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
      </section>
    </>
  )
}

export default Page
