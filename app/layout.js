import './globals.css';
import Navegacion from '@/components/Navegacion/Navegacion';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navegacion />
        {children}
      </body>
    </html>
  )
}
