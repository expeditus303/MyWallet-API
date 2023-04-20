import userServices from "../services/user.services.js";

async function create(req, res, next) {
  const { name, email, password } = req.body;

  try {
    await userServices.create({ name, email, password });

    return res.status(201).send("User signed up successfully");
  } catch (err) {
    next(err)
  }
}

export default { create };
