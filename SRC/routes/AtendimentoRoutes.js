import express from "express";

import Controller from "../controller/AtendimentoController.js";
import validation from "../../validations/atendimentoValidation.js";

const routes = express.Router()

routes.get("/atendimento", Controller.listar)
routes.get("/atendimento/:id", Controller.buscar)
routes.post("/atendimento", validation, Controller.cadastrar)
//.post("/admin/",auth.autenticarAdm, Controller.cadastrarAdm)
routes.delete("/atendimento/:id", Controller.deletar)
routes.put("/atendimento/:id", Controller.atualizar)

export default routes