import Author from '@/app/components/Author'
import NewsletterCallout from '@/app/components/NewsletterCallout'
import Image from 'next/image'
import { useParams } from 'next/navigation'

function BlogPost({ params }) {
  return (
    <>
      <div className="hero-container nav-target">
        <main className="hero-bg">
          <div className="container mx-auto p-4 md:px-6">
            <div className="flex items-center pt-20 pb-4 text-white">
              <span className="text-lg">
                <span className="uppercase font-title font-medium">Blog /</span>{' '}
                Celebrating ISRO's Journey
              </span>
            </div>
          </div>
        </main>
      </div>

      <div className="container mx-auto p-4 md:px-6 pt-20">
        <h1 className="font-title font-medium uppercase text-5xl pb-4">
          Celebrating ISRO's Journey
        </h1>
        <div>
          <span className="pr-16">11 Sep 2023</span>
          <span>Jatin Sharma & Anushka Sao</span>
        </div>
      </div>

      <div className="container mx-auto p-4 md:px-6 flex flex-col md:flex-row gap-6 pb-20">
        <div className="md:w-3/4 flex flex-col gap-6">
          <Image
            className="w-full rounded-xl"
            src="/images/blogimg.png"
            width={737}
            height={491}
          />
          <div className="bg-[#ebebeb] p-6 rounded-xl">
            <h3 className="font-title uppercase font-medium text-lg text-primary pb-1">
              TL;DR;
            </h3>
            <p className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis temporibus corporis quae consectetur aperiam omnis
              nobis itaque saepe laboriosam minus cupiditate illum culpa,
              ratione cumque? Deserunt nesciunt velit inventore ullam nulla
              dolores.
            </p>
          </div>

          {/* Block Content */}
          <div>
            <h4 className="text-primary text-2xl font-semibold pb-1">
              Introduction
            </h4>
            <p className="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              iaculis lacus a purus lacinia aliquam. Duis volutpat mauris
              tellus, sed cursus quam consequat a. Donec pellentesque faucibus
              est aliquet pellentesque. Quisque non ex dictum, faucibus elit
              non, maximus lacus. Phasellus rutrum venenatis nunc, ut eleifend
              metus condimentum a. Proin posuere ipsum quis libero faucibus,
              vitae bibendum lacus laoreet. Sed tempor mauris suscipit bibendum
              imperdiet. Pellentesque habitant morbi tristique senectus et netus
              et malesuada fames ac turpis egestas. Donec egestas ornare orci,
              ut laoreet turpis ultrices non. Vestibulum dapibus ullamcorper ex
              in gravida.
            </p>
            <h4 className="text-primary text-2xl font-semibold pb-1">
              Mangalyaan - Details
            </h4>
            <p className="pb-5">
              Nam sed magna accumsan, tincidunt turpis quis, ultrices magna. Ut
              id volutpat ante. Phasellus vestibulum dapibus lorem vel dapibus.
              Mauris eu lectus facilisis, elementum nisl vel, faucibus nibh.
              Etiam a lectus tortor. Praesent vel rutrum erat. Donec nulla diam,
              bibendum at luctus eu, finibus a felis. Quisque pretium mollis
              ornare. Curabitur quis aliquam mi. Sed mattis lorem massa, eget
              eleifend tortor porttitor at. Sed vel turpis vehicula, tincidunt
              tortor ac, tristique felis. Maecenas volutpat dui augue, ut congue
              justo luctus quis. Donec vitae ipsum id velit interdum vulputate.
              Duis sed congue sapien. Praesent id felis vel augue aliquet
              pellentesque nec quis odio.
            </p>
            <h4 className="text-primary text-2xl font-semibold pb-1">
              Chandrayaan III
            </h4>
            <p className="pb-5">
              Nam sed magna accumsan, tincidunt turpis quis, ultrices magna. Ut
              id volutpat ante. Phasellus vestibulum dapibus lorem vel dapibus.
              Mauris eu lectus facilisis, elementum nisl vel, faucibus nibh.
              Etiam a lectus tortor. Praesent vel rutrum erat. Donec nulla diam,
              bibendum at luctus eu, finibus a felis. Quisque pretium mollis
              ornare. Curabitur quis aliquam mi. Sed mattis lorem massa, eget
              eleifend tortor porttitor at. Sed vel turpis vehicula, tincidunt
              tortor ac, tristique felis. Maecenas volutpat dui augue, ut congue
              justo luctus quis. Donec vitae ipsum id velit interdum vulputate.
              Duis sed congue sapien. Praesent id felis vel augue aliquet
              pellentesque nec quis odio.
            </p>
            <h4 className="text-primary text-2xl font-semibold pb-1">
              Conclusion
            </h4>
            <p className="pb-5">
              Mauris lobortis ipsum non massa malesuada, vel venenatis felis
              bibendum. Suspendisse facilisis ornare sem id egestas. Sed sem mi,
              sodales tempor purus quis, lacinia hendrerit sem. Phasellus vitae
              volutpat augue. Sed tempor quam vitae magna accumsan lobortis. Ut
              suscipit magna eu pretium ullamcorper. Mauris in auctor tortor.
            </p>
          </div>

          <div>
            <h5 className="font-title uppercase leading-none text-lg font-semibold pb-4">
              Authors
            </h5>
            <hr className="border-2 border-black mb-4" />
            <div className='flex gap-6 flex-wrap'>
            <Author name="Akshay Bade"/>
            <Author name="Maithili Kulkarni"/>
            <Author name="Prakhar Pandey"/>
            <Author name="Sahil Srinivas"/>
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
