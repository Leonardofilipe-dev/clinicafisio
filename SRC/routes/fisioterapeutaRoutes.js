import express from "express";

import Controller from "../controller/FisioterapeutaController.js";

const routes = express.Router()

    routes.get("/fisioterapeuta", Controller.listar)
    routes.get("/fisioterapeuta/:id", Controller.buscar)
    routes.post("/fisioterapeuta", Controller.cadastrar)
     //.post("/admin/",auth.autenticarAdm, Controller.cadastrarAdm)
    routes.delete("/fisioterapeuta/:id", Controller.deletar)
    routes.put("/fisioterapeuta/:id", Controller.atualizar)

    export default routes