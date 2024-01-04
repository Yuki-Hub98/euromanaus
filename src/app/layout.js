import { Inter } from 'next/font/google'
import "../styles/globals.css"
import Provider from "./providers/page"
import Sidebar from '@/components/SideBar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Euromanaus',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='flex'>
          <Provider>
            <Sidebar/>
            {children}
          </Provider>
        </div>
      </body>
    </html>
  )
}
