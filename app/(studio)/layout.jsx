export const metadata = {
  title: 'ACES DIT',
  description: 'Association of Computer Engineering Students DIT',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
