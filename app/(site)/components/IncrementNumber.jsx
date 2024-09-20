'use client'
import CountUp from 'react-countup'
import { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'

/**
 * A component that increments a number from 0 to the given number when the
 * component is scrolled into view.
 *
 * @param {Object} props
 * @prop {number} number The number to increment to
 *
 * @returns {JSX.Element} A JSX element that increments the given number
 */
function IncrementNumber({ number }) {
  const [triggered, setTriggered] = useState(false)

  return (
    <>
      <ScrollTrigger onEnter={() => setTriggered(true)}>
        {triggered && <CountUp start={0} end={number} duration={2} delay={0} />}
        +
      </ScrollTrigger>
    </>
  )
}

export default IncrementNumber
