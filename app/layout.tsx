import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const roboto = Roboto({ weight: ['100', '300', '400', '700', '900'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sydfact - Angola',
  description: 'Official Page For SYDFACT Software - Angola',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth focus:scroll-auto'>
      <body className={roboto.className}>
        <div className='w-full h-full m-auto flex flex-col justify-center items-center'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
