import Link from 'next/link'
import React from 'react'

function NewsletterCallout() {
  return (
    <div className="sm:col-span-2 lg:col-span-1 text-white bg-primary p-7 border-black border-[1px] rounded-2xl flex flex-col justify-between">
      <h3 className='font-title font-bold uppercase leading-relaxed text-4xl'>Join our Mailing List</h3>
        <p className='text-base font-normal leading-normal pt-6 mb-auto'>
          Receive updates about newest technological advancements & ongoings in
          our college
        </p>
      {/* <div className='pt-6 flex flex-col justify-between'> */}
        <Link className='mt-6 w-fit px-4 py-3 uppercase rounded-lg font-bold text-sm bg-black' href="/">Subscribe Now</Link>
      {/* </div> */}
    </div>
  )
}

export default NewsletterCallout
