import Image from 'next/image'

function page() {
  return (
    <div className='container mx-auto px-4 md:px-6 flex flex-col items-center text-center justify-center min-h-screen'>
      <Image
        src='/construction.svg'
        height={200}
        width={345}
        alt='Under Construction'
      />
      <h1 className='font-title font-semibold text-5xl uppercase text-primary py-5'>
        Site under construction
      </h1>
      <p className='text-lg pb-5'>Check back soon&hellip;</p>
    </div>
  )
}

export default page
