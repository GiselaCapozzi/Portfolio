import { skills } from '@/data/data';
import styles from './Skills.module.css';
import Image from 'next/image';


const Skills = () => {
  return (
    <div className={`${styles.container}`}>
      <div>
        <h3 className={`${styles.titulo}`}>Skills</h3>
      </div>
      <div className={`${styles.container_tarjeta}`}>
        {
        skills.map(skill => (
          <div
            className={`${styles.container_card}`}
            key={skill.id}
          >
            <h4 className={`${styles.nombre_card}`}>{skill.nombre}</h4>
            <Image
              src={skill.imagen}
              alt={skill.nombre}
              width={70}
              height={70}
              className={`${styles.logo_card}`}
            />
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Skills