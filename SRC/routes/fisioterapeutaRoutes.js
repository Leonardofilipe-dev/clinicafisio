import express from "express";

import Controller from "../controller/FisioterapeutaController.js";
import fisioterapeutaValidation from "../../validations/fisioterapeuta.js"


const routes = express.Router()

routes.get("/fisioterapeuta", Controller.listar)
routes.get("/fisioterapeuta/:id", Controller.buscar)
routes.post("/fisioterapeuta", fisioterapeutaValidation, Controller.cadastrar)
routes.post("/admin/", Controller.cadastrarAdm)
routes.delete("/fisioterapeuta/:id", Controller.deletar)
routes.put("/fisioterapeuta/:id", Controller.atualizar)

export default routes