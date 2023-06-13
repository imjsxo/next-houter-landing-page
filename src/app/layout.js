import './globals.css'
import { Lexend } from 'next/font/google'

const lexend = Lexend({ 
  subsets: ['latin']
})

export const metadata = {
  title: 'House Hunter',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  )
}
