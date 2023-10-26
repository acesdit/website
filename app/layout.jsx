import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter, Oswald } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata = {
  title: 'ACES DIT',
  description: 'Association of Computer Engineering Students DIT',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} font-body`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
