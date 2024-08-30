import './styles/Main.scss'

export const metadata = {
  title: 'Apple Store Uz',
  description: 'E-commerce for just sale apple products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
