import Image from 'next/image'
import Sandbox from './components/Sandbox'
import Event_Section from "./components/EventCard";

export default function Home() {
  return (
    <main className='container mx-auto px-4 py-6'>
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
        <Sandbox title="Hello" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum delectus inventore aut, nulla deleniti rem odio ea laborum animi fugiat?" />
        <Sandbox title="Hello" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum delectus inventore aut, nulla deleniti rem odio ea laborum animi fugiat?" />
        <Sandbox title="Hello" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum delectus inventore aut, nulla deleniti rem odio ea laborum animi fugiat?" />
      </div>
        <Event_Section/>
    </main>
  )
}
