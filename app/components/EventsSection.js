import Link from 'next/link'

function EventsSection() {
  const events = [
    'Acunetix 10.0',
    'Archivals Fest',
    "Hacktoberfest '23",
    'The Absolute Best Event Ever',
  ]
  return (
    <section>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 pt-20">
        <h2 className="main-head pb-0">Events</h2>
        <Link
          href="/"
          className="uppercase text-base font-semibold px-3 py-2 bg-secondary text-white rounded-lg"
        >{`Explore all ->`}</Link>
      </div>
      <div className="container mx-auto px-4 md:px-6 pt-4 pb-20">
        <div className="flex gap-3 overflow-x-scroll no-scrollbar snap-x snap-mandatory">
          {events.map((event) => (
            <Link className="snap-start" href="/" key={event}>
              <div className="w-96 h-60 bg-slate-900 text-white flex items-end p-5 rounded-lg">
                <h3 className="uppercase font-title font-medium text-4xl leading-tight">
                  {event}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EventsSection
