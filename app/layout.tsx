import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Seek Medical Affairs',
  description: 'Seek Medical Affairs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
          <div className="flex flex-col items-center min-h-screen bg-slate-100 text-zinc-600">
            <Navbar />
            <div className='w-[1100px] flex-1 my-20'>
              <Providers>
                {children}
              </Providers>
            </div>
          </div>
          <Footer />
      </body>
    </html>
  )
}
