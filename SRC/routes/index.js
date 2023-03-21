import express  from "express";

import fisioterapeutaRoutes from "./fisioterapeutaRoutes.js"

const routes = (app) => {
    app.use(
        express.json(), 
       fisioterapeutaRoutes
        )
}




export default routes