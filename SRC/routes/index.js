import express  from "express";

import fisioterapeutaRoutes from "./fisioterapeutaRoutes.js"
import pacienteRoutes from "./PacienteRoutes.js"

const routes = (app) => {
    app.use(
        express.json(), 
       fisioterapeutaRoutes,
       pacienteRoutes
        )
}




export default routes