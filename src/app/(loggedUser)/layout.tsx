import '../globals.css'
import './layout.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <header>
        This is a header
      </header>
      {children}
    </div>
  )
}
