import Link from "next/link"

function EventCard({name}) {
  return (
    <Link className="relative snap-start" href="/">
      <div className="w-96 h-60 bg-slate-900 text-white flex items-end p-5 rounded-lg">
        <h3 className="uppercase font-title font-medium text-4xl leading-tight">
          {name}
        </h3>
      </div>
    </Link>
  )
}

export default EventCard
