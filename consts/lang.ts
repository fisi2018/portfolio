import spanishlang from "../assets/images/spanishlang.jpg";
import englishlang from "../assets/images/englishlang.jpg";
import { Lang } from "../types/stateTypes";
export const LANG={
    ES:{
        panel:{
            home:"Inicio",
            about:"Acerca de",
            projects:"Proyectos",
            contact:"Contacto",
            theme:"Tema",
            langSelected:spanishlang,
            langs:[{img:englishlang,lang:Lang.En}]
        },
        pages:{
            index:{
                title:"Fundador & CEO en Prysmo Solutions"
            },
            about:{
                moveTitle:"Acerca de mí",
                title:"Mi nombre es Marco Josué Fura Mendoza, soy un desarrollador fullstack MERN con Nextjs y Typescript. Apasionado por la programación, gestión y en resolver problemas con soluciones digitales.",
                skills:{
                    subtitle:"Habilidades",
                    list:[
                        "HTML, CSS, JavaScript, programación funcional y orientada a objetos (POO).",
                        "Reactjs (Manejo de hooks personalizados, Contexts, useReducer, variables de entorno, request mediante Fetch, Axios, React Router).",
                        "Nextjs (ServerSideRendering, StaticSiteGeneration, optimización del SEO, uso de style jsx, useRouter, integración con Typescript, buenas prácticas y estructura de ficheros)",
                        "Autenticación y autorización por el front-end con NextAuthjs, Firebase y por el back-end con JWT(JsonWebToken) mediante middlewares.",
                        "Responsive design usando un paradigma first mobile, media queries. Estilos mediante CSS puro, Bootstrap, Tailwind.",
                        "Web Scrapping con Puppetear",
                        "Construcción de API REST con buenas prácticas y arquitectura MVC ocupando Nodejs, Express, MongoDB, Mongoose, MySQL.",
                        "Conocimientos básicos en C++, POO en Java, patrones de diseño, metodologías ágiles (SCRUM), Python, PHP y Postman para realizar peticiones."
                    ]
                },
                experience:{
                    subtitle:"Formación profesional",
                    list:[
                        "Formación en Ingeniería de Software en la Universidad Nacional Mayor de San Marcos (2017 - Actualidad)",
                        "Idioma español nativo e inglés intermedio en el Centro de idiomas de la UNMSM",
                        "Fundación y Gerencia de Prysmo Solutions hasta la actualidad.",
                        "Experiencia de 2 años construyendo aplicaciones web."
                    ]
                },
                prysmo:{
                    subtitle:"¿Qué es Prysmo Solutions?",
                    description:"Empresa especializada en el desarrollo de sitios web para startups, negocios no digitalizados y todo tipo de proyectos en general con diferentes tecnologías.",
                    button:"Visitar página"
                }
            },
            projects:{
                title:'"Si puedes imaginarlo, puedes programarlo."',
                moveTitle:"Mis proyectos"
            },
            contact:{
                title:"Siempre abierto para escuchar nuevas consultas y oportunidades. Para cualquier consulta puedes ponerte en contacto conmigo por cualquiera de los medios mostrados abajo.",
                moveTitle:"Contacto",
                form:{
                    title:"Escríbeme tus consultas",
                    button:"Enviar mensaje",
                    name:"Nombre",
                    subject:"Asunto",
                    message:"Mensaje",
                    email:"Correo"
                },
                description:"Puedes contactarme también por: "
            }
        }
    },
    EN:{
        panel:{
            home:"Home",
            about:"About me",
            projects:"Projects",
            contact:"Contact",
            theme:"Theme",
            langSelected:englishlang,
            langs:[{img:spanishlang,lang:Lang.Es}]
        },
        pages:{
            index:{
                title:"Founder & CEO at Prysmo Solutions",
            },
            about:{
                moveTitle:"About me",
                title:"My name is Marco Fura Mendoza, im a MERN fullstack developer using Nextjs and Typescript. Passionate about programming, management and solving problems with digital solutions ",
                skills:{
                    subtitle:"Skills",
                    list:[
                        "HTML, CSS, JavaScript, Functional Programming and Object-Oriented Programming (OOP).",
                        "Reactjs (Custom hooks, Contexts, useReducer, environment variables, request using Fetch and Axios, React Router).",
                        "Nextjs (ServerSideRendering, StaticSiteGeneration, SEO, use of style jsx, useRouter, integration with Typescript, best practices and folders structure)",
                        "Authentication and authorization by front-end using NextAuthjs, Firebase; and by the back-end with JWT(JsonWebToken) through middlewares.",
                        "Responsive design using a first mobile paradigm, media queries. Styles using pure CSS, Bootstrap, Tailwind.",
                        "Web Scrapping with Puppetear",
                        "Construction of REST API with good practices and MVC architecture using Nodejs, Express, MongoDB, Mongoose, MySQL.",
                        "Basic knowledge of C++, OOP in Java, design patterns, agile methodologies (SCRUM), Python, PHP and Postman to make requests."
                    ]
                },
                experience:{
                    subtitle:"Experience",
                    list:[
                    "Studies in Software Engineering at Universidad Nacional Mayor de San Marcos (2017 - Present)",
                    "Spanish language native and intermediate english at the UNMSM language center",
                    "Foundation and management of Prysmo Solutions until today.",
                    "Two years experience building web applications."
                    ]
                },
                prysmo:{
                    subtitle:"What is Prysmo Solutions?",
                    description:"Company specialized in the development of websites for startups, non-digitized businesses and all kinds of projects in general with different technologies.",
                    button:"Go WebSite"
                }
            },
            projects:{
                title:'"If you can imagine it, you can programe it"',
                moveTitle:"My projects"
            },
            contact:{
                title:"Always open to listen to new inquiries and opportunities. For any questions you can contact me by any of the means shown below.",
                moveTitle:"Contact",
                form:{
                    title:"Write me your questions",
                    button:"Send message",
                    name:"Name",
                    subject:"Subject",
                    message:"Message",
                    email:"Email"
                },
                description:"You can also contact me by: "
            }
        }
    }
}