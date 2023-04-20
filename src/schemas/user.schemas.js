import joi from "joi";

const signUp = joi.object({
  name: joi.string().min(2).max(40).required(),
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: joi.string().min(6).max(100).required(),
  confirmPassword: joi.string().valid(joi.ref("password")).required(),
});

const signIn = joi.object({
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: joi.string().max(100).required(),
});

export default { signUp, signIn };
