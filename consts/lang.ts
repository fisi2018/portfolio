import spanishlang from '../assets/images/spanishlang.jpg'
import englishlang from '../assets/images/englishlang.jpg'
import { Lang } from '../types/stateTypes'
export const LANG = {
  ES: {
    panel: {
      home: 'Inicio',
      about: 'Acerca de',
      projects: 'Proyectos',
      contact: 'Contacto',
      theme: 'Tema',
      langSelected: spanishlang,
      langs: [{ img: englishlang, lang: Lang.En }]
    },
    pages: {
      index: {
        title: 'Fundador & CEO en Prysmo Solutions',
        description: 'Ingeniero de Software'
      },
      about: {
        moveTitle: 'Acerca de mí',
        title:
          'Hola, soy Marco, un Ingeniero de Software especialista en resolver problemas con soluciones digitales.',
        skills: {
          subtitle: 'Habilidades',
          list: [
            'HTML, CSS, JavaScript, programación funcional y orientada a objetos (POO).',
            'Reactjs, React Native (Manejo de hooks personalizados, Contexts, useReducer, variables de entorno, request mediante Fetch, Axios, React Router).',
            'Nextjs (ServerSideRendering, StaticSiteGeneration, optimización del SEO, uso de style jsx, useRouter, integración con Typescript, buenas prácticas y estructura de ficheros)',
            'Autenticación y autorización por el front-end con NextAuthjs, Firebase y por el back-end con JWT(JsonWebToken) mediante middlewares.',
            'Responsive design usando un paradigma first mobile, media queries. Estilos mediante CSS puro, Bootstrap, Tailwind.',
            'Web Scrapping con Puppeteer',
            'Construcción de API REST con buenas prácticas (MVC and Clean Architecture) ocupando Nodejs, Express, MongoDB, Mongoose, MySQL.',
            'Conocimientos básicos en C++, POO en Java, patrones de diseño, metodologías ágiles (SCRUM), Python, PHP y Postman para realizar peticiones.'
          ]
        },
        experience: {
          subtitle: 'Experiencia Laboral',
          list: [
            {
              title: 'Fullstack Developer',
              subtitle: 'Katari',
              description: [
                'Implementación de features en la plataforma web de la empresa, usando PHP, Codeigniter, MySQL, JQuery.',
                'Creación de un sistema de lectura para usuarios externos elaborado con Nextjs, Reactjs, Redux, Redux-Saga, Nodejs, Fastify.',
                'Implementación de features en una plataforma de gestión de Recursos Humanos, usando Reactjs, Redux, Redux-Saga, Python, Fastapi, PostgreSQL.',
                'Implementación de un sistema de tracking de Social Listening.',
                'Optimización en el tiempo de respuesta de la plataforma principal.'
              ],
              rangeDate: '2022 - Actualidad'
            },
            {
              title: 'Ingeniero de Software',
              subtitle: 'Prysmo Solutions',
              description: [
                'Desarrollo de un sistema de gestión de Licitaciones para consultora eléctrica con Nextjs.',
                'Capacitación en el uso de Nextjs y Reactjs con buenas prácticas.',
                'Dirección de equipos agile de trabajo.',
                'Desarrollo de un app mobile de gestión de técnicos eléctricos para consultora eléctrica con React Native.',
                'Implementación de API de Google Maps para la visualización de ubicaciones de técnicos eléctricos.'
              ],
              rangeDate: '2022 - Actualidad'
            },
            {
              title: 'Fundador y CEO',
              subtitle: 'Prysmo Solutions',
              description: [
                'Gestión de Proyectos con la metodología SCRUM.',
                'Desarrollo de cronogramas de actividades.',
                'Reunión con clientes para la recolección de requerimientos.',
                'Desarrollo de alcances del proyecto.',
                'Desarrollo de planes de costos.'
              ],
              rangeDate: '2021 - 2022'
            },
            {
              title: 'Fullstack Developer',
              subtitle: 'Senergy',
              description: [
                'Elaboración de CMS para la gestión de contenido de la empresa.',
                'Implementación de API usando Nodejs, Express, MongoDB.',
                'Implementación de un sistema de autenticación y autorización.',
                'Reunión con clientes para la recolección de requerimientos.'
              ],
              rangeDate: '2021 - 2022'
            }
          ]
        },
        education: {
          subtitle: 'Formación Profesional',
          list: [
            'Ingeniería de Software en la Universidad Nacional Mayor de San Marcos (2017 - 2022)',
            'Maestría en Inteligencia Artificial en la Pontificia Universidad Católica de Chile (2024 - Actualidad)',
            'Fundación y Gerencia de Prysmo Solutions hasta la actualidad.',
            'Publicación de artículo: Neural Network Strategies and Models for Voice Cloning in a Multi-speaker Mode: An Overview (ICIT 2022).',
            'Experiencia de 3 años desarrollando software.'
          ]
        },
        prysmo: {
          subtitle: '¿Qué es Prysmo Solutions?',
          description:
            'Empresa especializada en el desarrollo de sitios web para startups, negocios no digitalizados y todo tipo de proyectos en general con diferentes tecnologías.',
          button: 'Visitar página'
        }
      },
      projects: {
        title: '"Si puedes imaginarlo, puedes programarlo."',
        moveTitle: 'Mis proyectos'
      },
      contact: {
        title:
          'Siempre abierto para escuchar nuevas consultas y oportunidades. Para cualquier consulta puedes ponerte en contacto conmigo por cualquiera de los medios mostrados abajo.',
        moveTitle: 'Contacto',
        form: {
          title: 'Escríbeme tus consultas',
          button: 'Enviar mensaje',
          name: 'Nombre',
          subject: 'Asunto',
          message: 'Mensaje',
          email: 'Correo'
        },
        description: 'Puedes contactarme también por: '
      }
    }
  },
  EN: {
    panel: {
      home: 'Home',
      about: 'About me',
      projects: 'Projects',
      contact: 'Contact',
      theme: 'Theme',
      langSelected: englishlang,
      langs: [{ img: spanishlang, lang: Lang.Es }]
    },
    pages: {
      index: {
        title: 'Founder & CEO at Prysmo Solutions',
        description: 'Software Engineer'
      },
      about: {
        moveTitle: 'About me',
        title:
          'Hey, my name is Marco and i am a software engineer specialist in solving problems with digital solutions',
        skills: {
          subtitle: 'Skills',
          list: [
            'HTML, CSS, JavaScript, Functional Programming and Object-Oriented Programming (OOP).',
            'Reactjs, React Native (Custom hooks, Contexts, useReducer, environment variables, request using Fetch and Axios, React Router).',
            'Nextjs (ServerSideRendering, StaticSiteGeneration, SEO, use of style jsx, useRouter, integration with Typescript, best practices and folders structure)',
            'Authentication and authorization by front-end using NextAuthjs, Firebase; and by the back-end with JWT(JsonWebToken) through middlewares.',
            'Responsive design using a first mobile paradigm, media queries. Styles using pure CSS, Bootstrap, Tailwind.',
            'Web Scrapping with Puppeteer',
            'Construction of REST API with good practices (MVC and Clean Architecture) using Nodejs, Express, MongoDB, Mongoose, MySQL.',
            'Basic knowledge of C++, OOP in Java, design patterns, agile methodologies (SCRUM), Python, PHP and Postman to make requests.'
          ]
        },
        experience: {
          subtitle: 'Experience',
          list: [
            {
              title: 'Fullstack Developer',
              subtitle: 'Katari',
              description: `
              - Implementación de features en la plataforma web de la empresa, usando PHP, Codeigniter, MySQL, JQuery.
              - Creación de un sistema de lectura para usuarios externos elaborado con Nextjs, Reactjs, Redux, Redux-Saga, Nodejs, Fastify.
              - Implementación de features en una plataforma de gestión de Recursos Humanos, usando Reactjs, Redux, Redux-Saga, Python, Fastapi, PostgreSQL.
              - Implementación de un sistema de tracking de Social Listening.
              - Optimización en el tiempo de respuesta de la plataforma principal.
              `,
              rangeDate: '2022 - Actualidad'
            },
            {
              title: 'Ingeniero de Software',
              subtitle: 'Prysmo Solutions',
              description: `
              - Desarrollo de un sistema de gestión de Licitaciones para consultora eléctrica con Nextjs.
              - Capacitación en el uso de Nextjs y Reactjs con buenas prácticas.
              - Dirección de equipos agile de trabajo.
              - Desarrollo de un app mobile de gestión de técnicos eléctricos para consultora eléctrica con React Native.
              - Implementación de API de Google Maps para la visualización de ubicaciones de técnicos eléctricos.
              `,
              rangeDate: '2022 - Actualidad'
            },
            {
              title: 'Fundador y CEO',
              subtitle: 'Prysmo Solutions',
              description: `
              - Gestión de Proyectos con la metodología SCRUM.
              - Desarrollo de cronogramas de actividades.
              - Reunión con clientes para la recolección de requerimientos.
              - Desarrollo de alcances del proyecto.
              - Desarrollo de planes de costos.
              `,
              rangeDate: '2021 - 2022'
            },
            {
              title: 'Fullstack Developer',
              subtitle: 'Senergy',
              description: `
              - Elaboración de CMS para la gestión de contenido de la empresa.
              - Implementación de API usando Nodejs, Express, MongoDB.
              - Implementación de un sistema de autenticación y autorización.
              - Reunión con clientes para la recolección de requerimientos.
              `,
              rangeDate: '2021 - 2022'
            }
          ]
        },
        education: {
          subtitle: 'Education',
          list: [
            'Software Engineering at Universidad Nacional Mayor de San Marcos (2017 - 2022)',
            'Master in Artificial Intelligence at Pontificia Universidad Católica de Chile (2024 - Present)',
            'Foundation and management of Prysmo Solutions until today.',
            'Three years experience building web applications.'
          ]
        },
        prysmo: {
          subtitle: 'What is Prysmo Solutions?',
          description:
            'Company specialized in the development of websites for startups, non-digitized businesses and all kinds of projects in general with different technologies.',
          button: 'Go WebSite'
        }
      },
      projects: {
        title: '"If you can imagine it, you can programe it"',
        moveTitle: 'My projects'
      },
      contact: {
        title:
          'Always open to listen to new inquiries and opportunities. For any questions you can contact me by any of the means shown below.',
        moveTitle: 'Contact',
        form: {
          title: 'Write me your questions',
          button: 'Send message',
          name: 'Name',
          subject: 'Subject',
          message: 'Message',
          email: 'Email'
        },
        description: 'You can also contact me by: '
      }
    }
  }
}
