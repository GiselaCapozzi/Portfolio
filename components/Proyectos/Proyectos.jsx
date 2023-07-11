import styles from './Proyectos.module.css';
import { proyectos } from '../../data/data';
import Image from 'next/image';
import libreria from '../../assets/libreria.png';
import Link from 'next/link';

const Proyectos = () => {
  return (
    <div className={`${styles.container}`} id='projects'>
      <div className={`${styles.container_titulo}`}>
        <h1 className={`${styles.titulo}`}>Proyectos</h1>
      </div>
      <div className={`${styles.container_proyectos}`}>
        <div className={`${styles.card_proyecto}`}>
          {
            proyectos.map(proyecto => (
              <>
                <Image
                  key={proyecto.id}
                  src={libreria}
                  width={350}
                  height={150}
                  alt={proyecto.id}
                  className={`${styles.portada}`}
                />
                <div className={`${styles.container_lenguajes}`}>
                  <h3 className={`${styles.titulo_proyecto}`}>{proyecto.nombre}</h3>
                  <div>
                    {
                      proyecto.lenguajes.map((lenguaje, index) => (
                        <Image
                          key={index}
                          src={lenguaje.imagen}
                          width={30}
                          height={30}
                          alt={lenguaje.id}
                        />
                      ))
                    }
                  </div>
                </div>
                <div className={`${styles.botones}`}>
                  <button className={`${styles.boton_repo}`}><Link href={proyecto.repo}>Repositorio</Link></button>
                  <button className={`${styles.boton_proyecto}`}><Link href={proyecto.url}>Proyecto</Link></button>
                </div>
              </>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Proyectos