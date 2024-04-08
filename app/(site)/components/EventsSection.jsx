import Link from 'next/link'
import EventCard from './EventCard'

function EventsSection() {
  const events = [
    'Acunetix 10.0',
    'Archivals Fest',
    "Hacktoberfest '23",
    'The Absolute Best Event Ever',
  ]
  return (
    <section>
      <div className='container mx-auto flex justify-between items-center px-4 md:px-6 pt-20'>
        <h2 className='main-head pb-0'>Events</h2>
        <Link href='/' className='btn-secondary'>{`Explore all ->`}</Link>
      </div>
      <div className='container mx-auto px-4 md:px-6 pt-4 pb-20'>
        <div className='flex gap-3 overflow-x-scroll no-scrollbar snap-x snap-mandatory'>
          {events.map((event) => (
            <EventCard name={event} key={event} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventsSection
