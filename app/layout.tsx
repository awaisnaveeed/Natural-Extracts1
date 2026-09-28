import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Natural Extracts | Cold Pressed Oils',
  description: 'Pure, cold pressed Canola and Mustard oils.',
  icons: {
    icon: '/Image_20260730_005603_946-removebg-preview.png',
  },
}

import { CartProvider } from './context/CartContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
