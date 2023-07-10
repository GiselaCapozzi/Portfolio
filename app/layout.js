import AboutMe from '@/components/AboutMe/aboutme';
import './globals.css';
import Navegacion from '@/components/Navegacion/Navegacion';
import Proyectos from '@/components/Proyectos/Proyectos';
import Skills from '@/components/Skills/Skills';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navegacion />
        <AboutMe />
        <Skills />
        <Proyectos />
        {children}
      </body>
    </html>
  )
}
