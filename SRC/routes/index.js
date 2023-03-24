import express from "express";

import fisioterapeutaRoutes from "./fisioterapeutaRoutes.js"
import pacienteRoutes from "./PacienteRoutes.js"
import AtendimentoRoutes from "./AtendimentoRoutes.js"

const routes = (app) => {
    app.use(
        express.json(),
        fisioterapeutaRoutes,
        pacienteRoutes,
        AtendimentoRoutes
    )
}

export default routes