'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
function Navbar() {
  const routes = [
    { label: 'Home', route: '/' },
    { label: 'Team', route: '/' },
    { label: 'Events', route: '/' },
    { label: 'Alumni', route: '/' },
    { label: 'Contact', route: '/' },
  ]

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full bg-black overflow-hidden">
      <div className="container mx-auto flex justify-between items-center p-4 md:p-6">
        {/* Logo */}
        <Link href="/" className="h-[30px]">
          <Image src="/logo-text.svg" alt="" width={120} height={30} />
        </Link>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-white text-base font-semibold uppercase">
          {routes.map((route) => (
            <li>
              <Link href={route.route}>{route.label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle open */}
        <button className="md:hidden inline" onClick={() => setIsOpen(true)}>
          <Image
            className="invert"
            height={20}
            width={20}
            src="/nav-open.svg"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`fixed top-0 right-0 bg-white h-full w-5/6 px-4 py-6 transition-all shadow-2xl ${!isOpen && 'translate-x-full'}`}>
        {/* Mobile toggle close */}
        <button className="md:hidden block ml-auto" onClick={() => setIsOpen(false)}>
          <Image
            className="ml-auto"
            height={20}
            width={20}
            src="/nav-close.svg"
          />
        </button>
        <ul className="flex flex-col p-6">
          {routes.map((route) => (
            <li className="p-4 mt-8 uppercase text-base font-semibold">
              <Link href={route.route}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
