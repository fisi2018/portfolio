import { Project } from "../interfaces/project";
import { Lang } from "../types/stateTypes";
export const DB:Project[]=[
    {
        _id:"1",
        title:{
            [Lang.Es]:"Ecommerce Importadora A&F",
            [Lang.En]:"Ecommerce Importadora A&F"
        },
        description:{
            [Lang.Es]:"Plataforma para realizar pedidos de prendas de vestir al por mayor y al detalle mediante una API REST. Cuenta con una parte administrativa en una SPA.",
            [Lang.En]:"Platform to place wholesale and retail clothing orders through a REST API. It has an administrative part in a SPA."
        },
        techs:"Nextjs, Reactjs, Nodejs, Express, MongoDB",
        urlDemo:"https://frontend-ecommerce-iota.vercel.app/",
        urlGit:"https://github.com/fisi2018/frontend-ecommerce"
    },{
        _id:"2",
        title:{
            [Lang.Es]:"SPA para administrar ecommerce",
            [Lang.En]:"SPA to ecommerce management"
        },
        description:{
            [Lang.Es]:"Single Page Application usada para gestionar el contenido de un ecommerce.",
            [Lang.En]:"Single Page Application used to ecommerce content management "
        },
        techs:"Reactjs, Nodejs, Express, MongoDB",
        urlDemo:"https://adminmyecommerce.web.app/",
        urlGit:"https://github.com/fisi2018/admin-my-ecommerce"
    },
    {
        _id:"3",
        title:{
            [Lang.Es]:"Restaurant La Frontera",
            [Lang.En]:"Restaurant La Frontera"
        },
        description:{
            [Lang.Es]:"Gestor para el pedido de platos de un restaurant usando un API REST y sockets para ver el pedido en tiempo real.Incluye validación de correo electrónico, autenticación y autorización.",
            [Lang.En]:"Manager for ordering dishes from a restaurant using an API REST and sockets to see the order in real time. It includes email validation, authentication and authorization."
        },
        techs:"Nextjs, Reactjs, Nodejs, Express, JWT, MongoDB",
        urlDemo:"https://restaurant-frontend-omega.vercel.app/",
        urlGit:"https://github.com/fisi2018/restaurant-frontend"
    },
    {
        _id:"4",
        title:{
            [Lang.Es]:"Finder",
            [Lang.En]:"Finder"
        },
        description:{
            [Lang.Es]:"Aplicativo web para guardar y compartir direcciones con tus contactos.",
            [Lang.En]:"Web Application to save and share address with your contacts."
        },
        techs:"Nextjs, Reactjs, Nodejs, Express, MongoDB, MapBox",
        urlDemo:"https://finder-pe.vercel.app/",
        urlGit:"https://github.com/fisi2018/finder-pe"
    }
]