import { Open_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  variable: '--font-open-sans',
})

export const sangBleuEmpire = localFont({
  src: [
    {
      path: '../../public/fonts/sangbleuempire-black-italic.woff',
      weight: '900',
      style: 'italic',
    },
    {
      path: '../../public/fonts/sangbleuempire-black.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sang-bleu-empire',
})

export const sangBleuKingdom = localFont({
  src: [
    {
      path: '../../public/fonts/sangbleukingdom-light.woff',
      weight: '300',
    },
    {
      path: '../../public/fonts/sangbleukingdom-regular.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-sang-bleu-kingdom',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} 
        ${sangBleuKingdom.variable} 
        ${sangBleuEmpire.variable}
        font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
