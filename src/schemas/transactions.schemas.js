import joi from "joi"

const create = joi.object({
    type: joi.string().valid('income', 'expense').required(),
    value: joi.number().positive().integer().strict().required(),
    description: joi.string().max(80).required(), 
})

export default { create }