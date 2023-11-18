import BlogCard from '../components/BlogCard'
import FeaturedCard from '../components/FeaturedCard'
import NewsletterCallout from '../components/NewsletterCallout'
function Page() {
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

      <section className='container mx-auto p-4 md:px-6 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 pt-20'>
      <FeaturedCard
          title="Why You Should Have a Holiday"
          description="Whereas disregard and contempt for human rights have resulted"
          creationDate="29th Feb 2023"
          imageURL="https://picsum.photos/422/300.jpg"
          linkTo="/blog/something"
        />
        <NewsletterCallout/>
      </section>

      <section className="container mx-auto p-4 md:px-6 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 pb-20">
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
