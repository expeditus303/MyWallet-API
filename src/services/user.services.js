import bcrypt from "bcrypt";
import userRepositories from "../repositories/user.repositories.js";
import transactionsRepositories from "../repositories/transactions.repositories.js";
import errors from "../errors/errors.js";
import { v4 as uuidv4 } from "uuid";
import { ObjectId } from "mongodb";

async function create({ name, email, password }) {
  const userExists = await userRepositories.findByEmail({ email });

  if (userExists) throw errors.conflit("Email already registered");

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = {
    name,
    email,
    password: hashPassword,
    session: null,
    transactions: [],
  };

  await userRepositories.create(newUser);

  return;
}

async function authenticate({ email, password }) {
  const userExists = await userRepositories.findByEmail({ email });

  if (!userExists) throw errors.unauthorized("Incorrect email or password");

  const validPassword = await bcrypt.compare(password, userExists.password);

  if (!validPassword) throw errors.unauthorized("Incorrect email or password");

  const userId = new ObjectId(userExists._id);
  const userName = userExists.name;
  const token = uuidv4();

  await userRepositories.createSession({ _id: userId, token });

  const authData = { name: userName, token };

  return authData;
}

export default { create, authenticate };
