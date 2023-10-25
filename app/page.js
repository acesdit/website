import Image from 'next/image'
import Sandbox from './components/Sandbox'
import Navbar from './components/Navbar'
import StatsSection from './components/stats.js';
import Event_Section from "./components/EventCard";
import Footer from "./components/Footer";
import Hero from './components/Hero';
import BlogCard from './components/BlogCard.js';

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      {/* Who are we section */}

      {/* Stats section */}
      <StatsSection/>
      {/* <Home /> */}

      {/* Events carousel */}

      {/* <Event_Section/> */}

      {/* <Footer/> */}
    </>
  )
}

export default App;
