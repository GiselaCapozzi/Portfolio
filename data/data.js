import HTML5 from '../assets/html5.png';
import CSS3 from '../assets/css.png';
import CSSModules from '../assets/css-modules-logo.png';
import Bootstrap from '../assets/bootstrap.png';
import JavaScript from '../assets/javascript.png';
import React from '../assets/react.png';
import Next from '../assets/next.png';
import Firebase from '../assets/firebase.png';
import Mysql from '../assets/mysql.png';
import Node from '../assets/node.png';
import Git from '../assets/git.png';
import Express from '../assets/express.png';
import Telefono from '../assets/phone.png';
import Email from '../assets/email.png';
import Github from '../assets/github.png';
import Linkedin from '../assets/linkedin.png';
import libreria from '../assets/libreria.png';
import clima from '../assets/clima.png';

export const skills = [
  {
    id: 1,
    nombre: 'HTML5',
    imagen: HTML5,
  },
  {
    id: 2,
    nombre: 'CSS3',
    imagen: CSS3,
  },
  {
    id: 3,
    nombre: 'CSS Modules',
    imagen: CSSModules,
  },
  {
    id: 4,
    nombre: 'Bootstrap',
    imagen: Bootstrap,
  },
  {
    id: 5,
    nombre: 'JavaScript',
    imagen: JavaScript,
  },
  {
    id: 6,
    nombre: 'React.js',
    imagen: React,
  },
  {
    id: 7,
    nombre: 'Next.js',
    imagen: Next,
  },
  {
    id: 8,
    nombre: 'Firebase',
    imagen: Firebase,
  },
  {
    id: 9,
    nombre: 'MySQL',
    imagen: Mysql,
  },
  {
    id: 10,
    nombre: 'Node.js',
    imagen: Node,
  },
  {
    id: 11,
    nombre: 'Git',
    imagen: Git,
  },
  {
    id: 12,
    nombre: 'Express.js',
    imagen: Express,
  }
];

export const proyectos = [
  {
    id: 1,
    nombre: 'Cosmos Libreria',
    url: 'https://cosmoslibreria.netlify.app',
    repo: 'https://github.com/GiselaCapozzi/proyectoLibreria_Reactjs',
    lenguajes: [
      skills[0], 
      skills[2], 
      skills[3], 
      skills[4], 
      skills[5], 
      skills[7],
      skills[10]
    ],
    portada: libreria
  },
  {
    id: 2,
    nombre: 'Buscador del Clima',
    url: 'https://climadeciudad.netlify.app/',
    repo: 'https://github.com/GiselaCapozzi/AplicacionClima_React/tree/master',
    lenguajes: [
      skills[0],
      skills[1],
      skills[4],
      skills[5],
    ],
    portada: clima
  }
];

export const contactos = [
  {
    id: 1,
    contacto: 'gisecapozzi@gmail.com',
    logo: Email,
    href: 'mailto:gisecapozzi@gmail.com?subject=SendMail&body=Description'
  },
  {
    id: 2,
    contacto: '@GiselaCapozzi',
    logo: Github,
    href: 'https://github.com/GiselaCapozzi?tab=repositories'
  },
  {
    id: 3,
    contacto: '@GiselaCapozzi',
    logo: Linkedin,
    href: 'https://www.linkedin.com/in/gisela-capozzi-3b4380181/'
  }
]