'use client'
import CountUp from 'react-countup'
import { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'

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
