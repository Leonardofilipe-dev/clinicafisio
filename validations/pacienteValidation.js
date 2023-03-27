import { validate, Joi } from "express-validation";

const validationRules = {
    body: Joi.object({
        nome: Joi.string().required(),
        dataNascimento:Joi.date(),
        prontuario:Joi.string()
    })
};

export default validate(validationRules);