import './globals.css'
import { Bebas_Neue, Montserrat } from 'next/font/google'

// Bebas Neue pro nadpisy a loga
const bebas = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin', 'latin-ext'], // latin-ext zajistí správné háčky
  variable: '--font-bebas',
})

// Montserrat pro běžný text (je lépe čitelný než Bebas)
const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-montserrat',
})

export default function RootLayout({ children }) {
  return (
    <html lang="cs" className={`${bebas.variable} ${montserrat.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
