import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SANTECH REPAIR GH | Expert Repairs. Genuine Solutions.',
  description: 'Professional phone, laptop and electronics repairs in Ghana. SANTECH REPAIR GH delivers reliable technology solutions and quality devices.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
