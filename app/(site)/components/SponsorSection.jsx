import Link from 'next/link'
import Image from 'next/image'

/**
 * A Next.js page component that renders the co-sponsors section.
 *
 * It renders a section that displays the logos of the co-sponsors.
 *
 * @returns {JSX.Element} The rendered section.
 */
function EventsSection() {
  return (
    <section>
      <div className='container mx-auto text-center px-4 md:px-6 pt-20'>
        {/* <h2 className='main-head pb-0'>Co-Sponsors</h2> */}
      </div>
      {/* <div className="container mx-auto px-4 md:px-6 pt-4 pb-20 flex items-center justify-center"> */}
      <div className='container mx-auto px-4 md:px-6 py-20 flex items-center justify-center'>
        {/* <Link href='https://cat2cetmentors.com/' target='_blank'>
          <Image
            src={'/images/c2c.png'}
            width={300}
            height={85}
            alt='C2C Mentors'
          />
        </Link> */}
      </div>
    </section>
  )
}

export default EventsSection
