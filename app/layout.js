'use client'

import './globals.css';
import Navegacion from '@/components/Navegacion/Navegacion';
import { Domine } from 'next/font/google';

const font = Domine({
  weight: ['400'],
  subsets: ['latin']
})

export default function RootLayout({ children }) {

  return (
    <html lang="en">
        <body className={font.className}>
          <Navegacion
          />
          {children}
        </body>
    </html>
  )
}