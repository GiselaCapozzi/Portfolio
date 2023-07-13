import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import foto from '../assets/fotoChica.jpg';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import cv from '../assets/cv_102350.png';
import cv_pdf from '../assets/CV/Gisela capozzi.png';

export default function Home() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.foto}`}>
        <div className={`${styles.nombre}`}>
          <h1>Hola, soy Gisela</h1>
          <h4>y soy desarrolladora Frontend</h4>
        </div>
        <div className={`${styles.imagen}`}>
          <Image src={foto} alt="foto" />
        </div>
      </div>
      <div className={`${styles.redes}`}>
        <div className={`${styles.github}`}>
        <Link target='_blank' href='https://github.com/GiselaCapozzi?tab=repositories'>
          <Image
            src={github}
            alt="github"
          />
          <p>@GiselaCapozzi</p>
        </Link>
        </div>
        <div className={`${styles.linkedin}`}>
        <Link target='_blank' href='https://www.linkedin.com/in/gisela-capozzi-3b4380181/'>
          <Image
            src={linkedin}
            alt="linkedin"
          />
          <p>@GiselaCapozzi</p>
        </Link>
        </div>
        <div className={`${styles.cv}`}>
          <Link target='_blank' href='#'>
          <Image
            src={cv}
            alt="cv"
          />
          <p>CV</p>
        </Link>
        </div>
      </div>
      <div className={`${styles.curriculum}`}>
        <Image 
          src={cv_pdf}
          alt='curriculum'
        />
      </div>
    </div>
  )
}
