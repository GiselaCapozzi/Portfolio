import styles from './Proyectos.module.css';
import { proyectos } from '../../data/data';
import Image from 'next/image';
import Link from 'next/link';

const Proyectos = () => {
  return (
    <>
      <div className={`${styles.container_titulo}`}>
        <h1 className={`${styles.titulo}`}>Proyectos</h1>
      </div>
      <div className={`${styles.container}`}>
        {
          proyectos.map(proyecto => (
            <div className={`${styles.container_proyectos}`}>
              <>
                <div className={`${styles.container_portada}`}>
                  <Image
                    key={proyecto.id}
                    src={proyecto.portada}
                    alt={proyecto.id}
                    className={`${styles.portada}`}
                  />
                </div>
                <h3 className={`${styles.titulo_proyecto}`}>{proyecto.nombre}</h3>
                <div className={`${styles.container_lenguajes}`}>
                  <div>
                    {
                      proyecto.lenguajes.map((lenguaje, index) => (
                        <Image
                          key={index}
                          src={lenguaje.imagen}
                          width={20}
                          height={20}
                          alt={lenguaje.id}
                        />
                      ))
                    }
                  </div>
                </div>
                <div className={`${styles.botones}`}>
                  <button className={`${styles.boton_repo}`}><Link target='_blank' href={proyecto.repo}>Repositorio</Link></button>
                  <button className={`${styles.boton_proyecto}`}><Link target='_blank' href={proyecto.url}>Proyecto</Link></button>
                </div>
                {/* <hr style={{width: '75vw' }}/> */}
              </>
            </div>
          ))
        }

      </div>
    </>
  )
}

export default Proyectos