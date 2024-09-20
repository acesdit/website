'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'

// NOT USED IN CURRENT SITE

/**
 * A component that renders a single event as a card.
 * The component uses hover effects to create a "halo" around the card.
 * @param {{ name: string }} props
 * A props object with a `name` property.
 * @returns {JSX.Element}
 * A JSX element that renders the event card.
 */
function EventCard({ name }) {
  const divRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <Link
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='relative snap-start hover-halo'
      href='/'>
      <div
        className='pointer-events-none absolute -inset-px opacity-0 transition duration-300'
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.2), transparent 40%)`,
        }}
      />
      <div className='w-96 h-60 bg-slate-900 text-white flex items-end p-5 rounded-lg'>
        <h3 className='uppercase font-title font-medium text-4xl leading-tight'>
          {name}
        </h3>
      </div>
    </Link>
  )
}

export default EventCard
