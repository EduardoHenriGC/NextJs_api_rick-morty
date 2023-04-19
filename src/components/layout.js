import Navbar from './navbar'
import Footer from './footer'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})


export default function Layout({ children }) {
  return (
    <div className={roboto.className}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}