'use client'

import './globals.css';
import Navegacion from '@/components/Navegacion/Navegacion';
import { Domine } from 'next/font/google';
import { createContext, useState, useEffect } from 'react';

const font = Domine({
  weight: ['400'],
  subsets: ['latin']
})

export const ThemeContext = createContext(null);

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = async () => {
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'))
    if (theme === 'light') {
      document.body.classList.add('light');
      document.body.classList.remove('dark')
      await localStorage.setItem('dark-mode', 'light')
    }

    if (theme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light')
      await localStorage.setItem('dark-mode', 'dark')
    }
  }

  useEffect(() => {
    if (localStorage.getItem('dark-mode') === 'light') {
      document.body.classList.add('light');
    } else if (localStorage.getItem('dark-mode') === 'dark') {
      document.body.classList.add('dark')
    }
  }, [])

  return (
    <html lang="en">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <body className={font.className} theme={theme}>
          <Navegacion
            theme={theme}
            toggleTheme={toggleTheme}
          />
          {children}
        </body>
      </ThemeContext.Provider>
    </html>
  )
}