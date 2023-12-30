import { Bricolage_Grotesque } from 'next/font/google'
import { manrope } from './fonts'
import './globals.css'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: 'CECI GOMEZ',
  description: 'UX/UI Designer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} relative min-h-screen pb-[252px] md:pb-[119px]`}>
      <Nav />
      <div >
        {children}
      </div>
      <Footer />
      </body>
    </html>
  )
}
