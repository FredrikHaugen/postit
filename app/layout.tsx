import './globals.css'
import { Roboto } from 'next/font/google'
import Nav from './auth/Nav'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`mx-4 md:mx-48 lg:mx-96 $(roboto.variable ) bg-slate-100`}>
        <Nav/>
        {children}
      </body>
    </html>
  )
}
