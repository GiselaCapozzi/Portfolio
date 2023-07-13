'use client'

import styles from './contact.module.css';
import { contactos } from '@/data/data';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className={`${styles.container}`}>
      <h3 className={`${styles.titulo}`}>Actualmente estoy buscando nuevas oportunidades.</h3>
      <div className={`${styles.formulario}`}>
        <form onSubmit={'/'}>
          <div className={`${styles.inputs}`}>
            <div className={`${styles.email}`}>
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="email"
                id=""
                placeholder='email@example.com'
                autoFocus
                required
              />
            </div>
            <div className={`${styles.nombre}`}>
              <label htmlFor="">Nombre</label>
              <input
                type="text"
                name="nombre"
                id=""
                placeholder='Nombre'
                required
              />
            </div>
          </div>
          <div className={`${styles.mensaje}`}>
            <label htmlFor="">Mensaje</label>
            <textarea
              name="mensaje"
              id=""
              cols="30"
              rows="10"
              required
              placeholder='Escribe el mensaje aca...'
            ></textarea>
          </div>
          <input type="submit" value="Enviar" />
        </form>
      </div>
      <span className={`${styles.separador}`}></span>
      <div className={`${styles.contactos}`}>
        {
          contactos.map(contacto => (
            <div key={contacto.id} className={`${styles.container_contactos}`}>
              <a href='tel:+541160006045' className={`${styles.contacto}`} >
                <Image
                  src={contacto.logo}
                  alt={contacto.id}
                  width={30}
                  height={30}
                />
                <p>{contacto.contacto}</p>
              </a>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Contact