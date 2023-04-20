import joi from "joi";

const create = joi.object({
  type: joi.string().valid("income", "expense").required(),
  value: joi.number().positive().integer().strict().required(),
  description: joi.string().max(80).required(),
});

const objectId = joi.object({
  transactionId: joi.string().alphanum().length(24).message("Invalid or missing transaction id").required(),
});

const update = joi.object({
  value: joi.number().positive().integer().strict().required(),
  description: joi.string().max(80).required(),
})

export default { create, objectId, update };
