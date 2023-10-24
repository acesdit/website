import Image from 'next/image'
import Sandbox from './components/Sandbox'
import Event_Section from "./components/EventCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
        <div className='flex justify-center px-4 w-[100%] mx-auto my-4'>
            <Event_Section/>
        </div>
        <Footer/>
    </main>
  )
}
