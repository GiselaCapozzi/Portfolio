import styles from './Aboutme.module.css';

const Acerca = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.descripcion}`}>
        <p className={`${styles.aboutme}`}>Sobre mi</p>
        <p className={`${styles.texto}`}>Desarrolladora Frontend con experiencia en Reactjs, Javascript, Bootstrap, CSS Modules y consumo de APIs REST. Apasionada por el diseño y estar en constante aprendizaje. Tambien tengo experiencia en proyectos gestionados por Metodologías Ágiles.</p>
      </div>
    </div>
  )
}

export default Acerca;