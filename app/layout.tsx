import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'

const poppins = Poppins({ weight: ['400', '500', '700', '800', '900'], subsets: ['latin'] })

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
    <html lang="en">
      <body className={poppins.className}>
        <div className='w-full h-full m-auto flex flex-col justify-center items-center'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
