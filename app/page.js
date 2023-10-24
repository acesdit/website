import Image from 'next/image'
import Sandbox from './components/Sandbox'
import Navbar from './components/Navbar'
import Home from './components/stats.js';
import Event_Section from "./components/EventCard";

function App() {
  return (
    <>
    <Navbar/>
    <main className='container mx-auto px-4 py-6'>
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
        <Sandbox title="Hello" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum delectus inventore aut, nulla deleniti rem odio ea laborum animi fugiat?" />
      </div>

      {/* Hero Section */}

      {/* ... */}

      {/* Who are we section */}

      {/* ... */}

      {/* Stats section */}
      <Home />
      {/* Events carousel */}
      <Event_Section/>
    </main>
    </>
  )
}

export default App;
