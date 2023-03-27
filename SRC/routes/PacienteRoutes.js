import express from "express";

import Controller from "../controller/PacienteController.js";
import validation from "../../validations/pacienteValidation.js"

const routes = express.Router()

routes.get("/paciente", Controller.listar)
routes.get("/paciente/:id", Controller.buscar)
routes.post("/paciente", validation, Controller.cadastrar)
routes.delete("/paciente/:id", Controller.deletar)
routes.put("/paciente/:id", Controller.atualizar)

export default routes