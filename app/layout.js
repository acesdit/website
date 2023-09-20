import './globals.css'
import { Lato } from 'next/font/google'

const lato = Lato({weight: ['300', '400', '700'], subsets: ['latin'] })

export const metadata = {
  title: 'Under Maintainence | ACES',
  description: 'Association of Computer Engineering Students DIT',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
