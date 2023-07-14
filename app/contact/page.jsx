'use client'

import { useState, useRef } from 'react';
import styles from './contact.module.css';
import { contactos } from '@/data/data';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {

  const form = useRef();
  const service = process.env.NEXT_SERVICE_ID;
  const template = process.env.NEXT_TEMPLATE_ID;
  const key = process.env.NEXT_PUBLIC_KEY;
  console.log(key)
  
  const [datos, setDatos] = useState({
    user_email: '',
    user_name: '',
    message: ''
  });

  const obtenerDatosInput = ({ target: { name, value } }) => {
    setDatos({
      ...datos,
      [name]: value
    })
  }

  const sendEmail = e => {
    e.preventDefault();
    emailjs.sendForm('service_4usr38m', 'template_9a16x0m', form.current, key)
      .then(res => {
        Swal.fire({
          position: 'bottom-right',
          icon: 'success',
          title: 'El mensaje ha sido enviado correctamente',
          timer: 2000
        })
        console.log(res.text);
      }, (error) => {
        Swal.fire({
          position: 'bottom-right',
          icon: 'error',
          title: 'El mensaje no ha podido ser enviado',
          timer: 1500
        })
        console.log(error.text)
      })
  }

  return (
    <div className={`${styles.container}`}>
      <h3 className={`${styles.titulo}`}>Actualmente estoy buscando nuevas oportunidades.</h3>
      <div className={`${styles.formulario}`}>
        <form ref={form} onSubmit={sendEmail}>
          <div className={`${styles.inputs}`}>
            <div className={`${styles.email}`}>
              <label htmlFor="">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder='email@example.com'
                autoFocus
                required
                onChange={obtenerDatosInput}
              />
            </div>
            <div className={`${styles.nombre}`}>
              <label htmlFor="">Nombre</label>
              <input
                type="text"
                name="user_name"
                placeholder='Gisela Capozzi'
                required
                onChange={obtenerDatosInput}
              />
            </div>
          </div>
          <div className={`${styles.mensaje}`}>
            <label htmlFor="">Mensaje</label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              required
              placeholder='Escribe el mensaje aca...'
              onChange={obtenerDatosInput}
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
              <a target='_blank' href={contacto.href} className={`${styles.contacto}`} >
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