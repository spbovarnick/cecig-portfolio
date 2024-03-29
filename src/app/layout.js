import { manrope } from './fonts'
import './globals.css'
import Nav from '@/components/nav/Nav'
import Footer from '@/components/footer/Footer'

export const metadata = {
  title: 'CECI GOMEZ',
  description: 'UX/UI Designer',
  metadataBase: new URL("https://www.cecidoes.work")
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${manrope.className} relative pb-[220px] md:pb-[119px] min-h-screen`}>
      <Nav />
      <div >
        {children}
      </div>
      <Footer />
      </body>
    </html>
  )
}
