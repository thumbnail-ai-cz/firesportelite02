export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body style={{ margin: 0, backgroundColor: 'black', color: 'white', fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
