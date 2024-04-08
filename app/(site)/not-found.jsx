import React from 'react'

function notFound() {
  return (
    <div className='bg-black text-white'>
      <div className='container mx-auto px-4 md:px-6 flex flex-col items-center text-center justify-center min-h-screen nav-target'>
        <h1 className='font-title font-semibold text-primary text-8xl uppercase'>
          404
        </h1>
        <h2 className='font-title font-semibold text-5xl uppercase py-5'>
          Page Not Found
        </h2>
        <p className='text-lg pb-5'>
          Check your link or contact administrator if you think this is a
          mistake
        </p>
      </div>
    </div>
  )
}

export default notFound
