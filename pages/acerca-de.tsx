import Layout from "../components/layout";
export default function About(){
    return(
        <Layout><>
            <section className="min-h-screen flex justify-center before:z-20 items-center p-4 before:top-1/2 before:left-0  relative before:text-9xl before:uppercase before:font-bold   before:flex  before:text-gray-200 before:absolute before:content-['Acerca_de_mí']  " >
                <p className="w-[40rem] text-2xl z-30" >Mi nombre es Marco Josué Fura Mendoza, soy un desarrollador fullstack MERN con Nextjs y Typescript. Disfruto aprender nuevas tecnologías y poder aplicarlas en diferentes proyectos. Apasionado en resolver problemas con soluciones digitales. </p>
            </section>
            <section className="min-h-screen p-4" >
                <div>
                <h2 className="text-6xl tracking-wider font-bold" >Habilidades</h2>
                <ul className=" py-2 text-lg  w-[45rem] " >
                    <li className="my-2" >
                        <p>HTML, CSS, JavaScript, programación funcional y orientada a objetos (POO).</p>
                    </li>
                    <li className="my-2">
                        <p>Reactjs (Manejo de hooks personalizados, Contexts, useReducer, variables de entorno, request mediante Fetch, Axios, React Router).</p>
                    </li>
                    <li className="my-2">
                        <p>Nextjs (ServerSideRendering, StaticSiteGeneration, optimización del SEO, uso de style jsx, useRouter, integración con Typescript, buenas prácticas y estructura de ficheros) </p>
                    </li>
                    <li className="my-2">
                        <p>Autenticación y autorización por el front-end con NextAuthjs, Firebase y por el back-end con JWT(JsonWebToken) mediante middlewares. </p>
                    </li>
                    <li className="my-2">
                        <p>Responsive design usando un paradigma first mobile, media queries. Estilos mediante CSS puro, Bootstrap, Tailwind.</p>
                    </li>
                    <li className="my-2">
                        <p>Web scrapping con Puppetear</p>
                    </li>
                    <li className="my-2">
                        <p>Construcción de API REST con buenas prácticas y arquitectura MVC ocupando Nodejs, Express, MongoDB, Mongoose, MySQL.</p>
                    </li>
                    <li className="my-2">
                        <p>Conocimientos básicos en C++, POO en Java, patrones de diseño, metodologías ágiles (SCRUM), Python, PHP y Postman para realizar peticiones.</p>
                    </li>
                </ul>
                </div>
                <div className="flex" >
                    
                </div>
            </section>
        </>
        </Layout>
    )
}