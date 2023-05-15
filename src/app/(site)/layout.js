import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import Provider from '../Provider';
import SiteHeader from "../components/site/Header";
import SiteFooter from "../components/site/Footer";
export default function SiteLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </Provider>
      </body>
    </html >
  )
}
