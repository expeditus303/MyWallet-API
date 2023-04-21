import { ObjectId } from "mongodb";
import dayjs from "dayjs";
import userRepositories from "../repositories/user.repositories.js";
import errors from "../errors/errors.js";

async function create(userId, type, value, description) {
  const date = dayjs().format("DD-MM-YYYY");

  const transaction = {
    _id: new ObjectId(),
    date,
    type,
    value,
    description,
  };

  await userRepositories.createTransaction(userId, transaction);

  return;
}

async function del(userId, transactionId) {
  transactionId = new ObjectId(transactionId);

  const deleted = await userRepositories.del(userId, transactionId);

  const transactionsUpdated = deleted.value.transactions

  console.log(transactionsUpdated)

  if (!transactionsUpdated) throw errors.notFound()

  return transactionsUpdated
}

async function update(
  userId,
  transactionId,
  transactionValue,
  transactionDescription) {

  transactionId = new ObjectId(transactionId);

  const updated = await userRepositories.update(
    userId,
    transactionId,
    transactionValue,
    transactionDescription
  );
  
  const transactionsUpdated = updated.value.transactions

  if (!transactionsUpdated) throw errors.notFound()

  return transactionsUpdated
} 

export default { create, del, update };
