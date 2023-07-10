import styles from './aboutme.module.css';
import foto from '../../assets/fotoChica.jpg';
import Image from 'next/image';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <div className={`${styles.container}`} id='aboutme'>
      <div className={`${styles.container_foto}`}>
        <div className={`${styles.container_nombre}`}>
          <h1>Hola, soy Gisela</h1>
          <h4>y soy desarrolladora Frontend</h4>
        </div>
        <div className={`${styles.container_imagen}`}>
          <Link href='https://github.com/GiselaCapozzi'><Image src={foto} alt='foto' /></Link>
        </div>
      </div>
      <div className={`${styles.descripcion}`}>
        <p className={`${styles.aboutme}`}>Sobre mi</p>
        <p className={`${styles.texto}`}>Desarrolladora Frontend con experiencia en Reactjs, Javascript, Bootstrap, CSS Modules y consumo de APIs REST. Apasionada por el diseño y estar en constante aprendizaje. Tambien tengo experiencia en proyectos gestionados por Metodologías Ágiles.</p>
      </div>
    </div>
  )
}

export default AboutMe