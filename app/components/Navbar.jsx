import Image from 'next/image'
function Navbar() {
  return (
    <nav className="fixed top-0 right-0 w-full h-full flex flex-col  bg-red-300">
      
      {/* Logo */}
      <Image src="/logo-text.svg" alt="" width={120} height={30} />
      
      {/* Links */}
      <ul className="flex flex-col text-center bg-slate-400">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
        <li>
          <a href="#">Alumni</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      {/* Mobile toggle */}
      <button>T</button>
    </nav>
  )
}

export default Navbar
