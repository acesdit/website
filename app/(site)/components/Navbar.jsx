'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import NavOpenSvg from './NavOpenSvg'
import LogoText from './LogoText'
function Navbar() {
  const routes = [
    { label: 'Home', route: '/', external: false },
    { label: 'Blog', route: '/blog', external: false },
    // { label: 'Events', route: '/construction', external: true },
    { label: 'Members', route: '/members', external: false },
    { label: 'Contact', route: 'mailto:acesdyp1@gmail.com', external: true },
  ]

  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname()

  useEffect(() => {
    const nav = document.querySelector('nav')
    const header = document.querySelector('.nav-target')
    const navHeight = nav.getBoundingClientRect().height
    function updateNavColor(entries) {
      const [entry] = entries
      if (!entry.isIntersecting) {
        nav.classList.add('nav-middle')
      } else {
        nav.classList.remove('nav-middle')
      }
    }
    const headerObserver = new IntersectionObserver(updateNavColor, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    })

    if (header !== null) {
      headerObserver.observe(header)
    }
    setIsOpen(false)
  }, [pathName])

  return (
    <nav className="w-full fixed top-0 z-20 text-white transition-colors nav-middle">
      <div className="container mx-auto flex justify-between items-center p-4 md:p-6">
        {/* Logo */}
        <Link href="/" className="h-[30px]">
          <LogoText/>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-base font-semibold uppercase">
          {routes.map((route) => (
            <li key={route.label}>
              <Link className='nav-link' href={route.route} target={route.external ? '_blank' : '_self'}>{route.label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle open */}
        <button className="md:hidden inline" onClick={() => setIsOpen(true)}>
          <NavOpenSvg/>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 bg-white text-black h-screen w-5/6 px-4 py-6 transition-transform z-40 shadow-2xl ${
          !isOpen ? 'translate-x-full' : ''
        }`}
      >
        {/* Mobile toggle close */}
        <button
          className="md:hidden block ml-auto"
          onClick={() => setIsOpen(false)}
        >
          <Image
            className="ml-auto"
            height={20}
            width={20}
            src="/nav-close.svg"
            alt="close menu"
          />
        </button>
        <ul className="flex flex-col p-6">
          {routes.map((route) => (
            <li
              key={route.label}
              className="p-4 mt-8 uppercase text-base font-semibold"
            >
              <Link href={route.route} target={route.external ? '_blank' : '_self'}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
