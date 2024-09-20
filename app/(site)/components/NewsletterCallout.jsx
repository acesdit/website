import React from 'react'

/**
 * A component that renders a newsletter callout section.
 *
 * It displays a heading, a paragraph of text, and a link to subscribe to the newsletter.
 *
 * @returns {JSX.Element} The rendered newsletter callout section.
 */
function NewsletterCallout() {
  return (
    <div className='col-span-3 lg:col-span-1 text-white bg-primary p-7 border-black border-[1px] rounded-2xl flex flex-col justify-between'>
      <h3 className='font-title font-bold uppercase leading-[1.5] text-4xl'>
        Welcome to our new Website!
      </h3>
      <p className='text-xl font-normal leading-normal pt-6 mb-auto line-clamp-4'>
        Stay tuned for further updates.
      </p>
      {/* <div className='pt-6 flex flex-col justify-between'> */}
      {/* <Link className='mt-6 w-fit px-4 py-3 uppercase rounded-lg font-bold text-sm bg-black' href="/">Subscribe Now</Link> */}
      {/* </div> */}
    </div>
  )
}

export default NewsletterCallout
