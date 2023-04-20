import { ObjectId } from "mongodb";
import dayjs from "dayjs";
import userRepositories from "../repositories/user.repositories.js";

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

  return await userRepositories.del(userId, transactionId);
}

export default { create, del };
