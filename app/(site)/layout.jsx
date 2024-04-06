import NextTopLoader from 'nextjs-toploader'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import '../globals.css'
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
  openGraph: {
    title: 'Association of Computer Engineering Student, DIT Pimpri',
    description:
      'ACES DIT is the departmental club of Department of Computer Engineering that aims to provide a platform for students to showcase their skills and talents.',
    url: 'https://aces.dypvp.edu.in/',
    siteName: 'ACES DIT',
    images: [
      {
        url: `https://acesdit.vercel.app/mainog.jpg`,
        width: 1200,
        height: 750,
        alt: 'ACES DIT',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/aces-vector.svg" />
      </head>
      <body className={`${inter.variable} ${oswald.variable} font-body`}>
        <NextTopLoader color="#A07C38" showSpinner={false} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
