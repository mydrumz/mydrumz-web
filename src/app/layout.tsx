// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Mydrumz',
  description: 'Estudio creativo & marketing',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head />
      <body>{children}</body>
    </html>
  )
}
