import Image from 'next/image'
import { useParams } from 'next/navigation'

function BlogPost({ params }) {
  return (
    <>
      <div className="hero-container nav-target">
        <main className="hero-bg">
          <div className="container mx-auto p-4 md:px-6">
            <div className="flex items-center pt-20 pb-8 text-white">
              <span><span>Blog</span> / {params.slug}</span>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default BlogPost
