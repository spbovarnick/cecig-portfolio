import { manrope } from './fonts'
import './globals.css'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: 'CECI GOMEZ',
  description: 'UX/UI Designer',
}

export default function RootLayout({ children, pwd }) {
  
  return (
    <html lang="en">
      <body className={`${manrope.className} relative pb-[220px] md:pb-[119px] min-h-screen`}>
      <Nav />
      <div >
        {children}
        {pwd}
      </div>
      <Footer />
      </body>
    </html>
  )
}
