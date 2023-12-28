import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import Nav from '@/components/nav/Nav'

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'CECI GOMEZ',
  description: 'UX/UI Designer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bricolageGrotesque.className}>
      <Nav />
      <div >
        {children}
      </div>
      </body>
    </html>
  )
}
