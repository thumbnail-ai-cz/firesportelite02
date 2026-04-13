import './globals.css'

export const metadata = {
  title: 'Hasičský Podcast',
  description: 'Web o požárním sportu',
}

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  )
}
