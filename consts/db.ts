import { Project } from "../interfaces/project";

export const DB:Project[]=[
    {
        _id:"1",
        title:"Ecommerce Importadora A&F",
        description:"Plataforma para realizar pedidos de prendas de vestir al por mayor y al detalle mediante una API REST. Cuenta con una parte administrativa en una SPA.",
        techs:"Nextjs, Reactjs, Nodejs, Express, MongoDB",
        urlDemo:"https://frontend-ecommerce-iota.vercel.app/",
        urlGit:"https://github.com/fisi2018/frontend-ecommerce"
    },{
        _id:"2",
        title:"SPA para administrar ecommerce",
        description:"Single Page Application usada para gestionar el contenido de un ecommerce.",
        techs:"Reactjs, Nodejs, Express, MongoDB",
        urlDemo:"https://adminmyecommerce.web.app/",
        urlGit:"https://github.com/fisi2018/admin-my-ecommerce"
    },
    {
        _id:"3",
        title:"Restaurant La Frontera",
        description:"Gestor para el pedido de platos de un restaurant usando un API REST y sockets para ver el pedido en tiempo real.Incluye validación de correo electrónico, autenticación y autorización.",
        techs:"Nextjs, Reactjs, Nodejs, Express, JWT, MongoDB",
        urlDemo:"https://restaurant-frontend-omega.vercel.app/",
        urlGit:"https://github.com/fisi2018/restaurant-frontend"
    },
    {
        _id:"4",
        title:"Finder",
        description:"Aplicativo web para guardar y compartir direcciones con tus contactos.",
        techs:"Nextjs, Reactjs, Nodejs, Express, MongoDB, MapBox",
        urlDemo:"https://finder-pe.vercel.app/",
        urlGit:"https://github.com/fisi2018/finder-pe"
    }
]