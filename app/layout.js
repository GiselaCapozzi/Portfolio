import AboutMe from '@/components/AboutMe/aboutme';
import './globals.css';
import Navegacion from '@/components/Navegacion/Navegacion';
import Proyectos from '@/components/Proyectos/Proyectos';
import Skills from '@/components/Skills/Skills';
import { Domine } from '@next/font/google';

const font = Domine({
  weight: ['400'],
  subsets: ['latin']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navegacion />
        {children}
        <AboutMe />
        <Skills />
        <Proyectos />
      </body>
    </html>
  )
}
