import bcrypt from "bcrypt"
import userRepositories from "../repositories/user.repositories.js"
import transactionsRepositories from "../repositories/transactions.repositories.js"

async function create({ name, email, password }) {

  const userExists = await userRepositories.findByEmail({email});

  if (userExists) throw errors.conflit("Email already registered");

  const hashPassword = await bcrypt.hash(password, 10)

  const user = await userRepositories.create({ name, email, password: hashPassword })

  console.log(user)

  const userId = user.insertedId

  await transactionsRepositories.create({userId, transactions: []})

  return
}

export default { create, };
