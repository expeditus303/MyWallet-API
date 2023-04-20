import joi from "joi"

const create = joi.object({
    name: joi.string().min(2).max(40).required(),
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: joi.string().min(6).max(100).required(),
    confirmPassword: joi.string().valid(joi.ref('password')).required()
})

export default { create, }