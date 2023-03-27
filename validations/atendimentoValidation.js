import { validate, Joi } from "express-validation";

const validationRules = {
    body: Joi.object({
        fisioterapeutaId: Joi.string().required(),
        pacienteId: Joi.string().required(),
        observacao: Joi.string().required()
    })
};

export default validate(validationRules);