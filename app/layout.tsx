import type { Metadata } from 'next'
import { Public_Sans, Spectral, Space_Grotesk } from 'next/font/google'
import './globals.css'

const publicSans = Public_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
})

const spectral = Spectral({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Agrosanoatni rivojlantirish agentligi',
  description: 'Официальный сайт агентства по развитию агропромышленности при Министерстве сельского хозяйства',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${publicSans.variable} ${spectral.variable} ${spaceGrotesk.variable} ${publicSans.className}`}>
        {children}
      </body>
    </html>
  )
}
