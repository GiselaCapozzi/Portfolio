import styles from './Navegacion.module.css';
import Link from 'next/link';
import ReactSwitch from 'react-switch';

const links = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'Sobre mi',
    route: '/acerca'
  },
  {
    name: 'skills',
    route: '/skills'
  },
  {
    name: 'Proyectos',
    route: '/projects'
  },
  {
    name: 'Contacto',
    route: '/contact'
  }
]

const Navegacion = ({ theme, toggleTheme }) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.container_links}`}>
        <Link href='/'><h3 className={`${styles.iniciales}`}>GC</h3></Link>
        <ul className={`${styles.links}`}>
          {
            links.map(link => (
              <li key={link.name}>
                <Link href={link.route}>
                  {link.name}
                </Link>
              </li>
            ))
          }
        </ul>
        <div className={`${styles.switch}`}>
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === 'light'}
            height={20}
            width={47}
          />
        </div>

      </div>
      <div className={`${styles.container_video}`}>
        <video
          src="https://cdn.pixabay.com/vimeo/179738669/codigo-fuente-4733.mp4?width=640&hash=75a9ba319371721a5329b20dba460274bcc41177"
          autoPlay={true}
          muted
          loop
        ></video>
      </div>
    </div>
  )
}

export default Navegacion