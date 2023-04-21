import db from "../config/database.connection.js";

async function findByEmail({ email }) {
  return db.usersCollections.findOne({ email });
}

async function create(newUser) {
  return db.usersCollections.insertOne(newUser);
}

async function createSession({ _id, token }) {
  return db.usersCollections.updateOne({ _id }, { $set: { session: token } });
}

async function findByToken(session) {
  return db.usersCollections.findOne(session);
}

async function createTransaction(userId, transaction) {
  const filter = { _id: userId }
  const update = { $push: { transactions: transaction } }
  const options = {
    returnDocument: "after",
    projection: { password: 0, email: 0, session: 0 },
  };


  return db.usersCollections.findOneAndUpdate(
    filter,
    update,
    options
  );
}

async function del(userId, transactionId) {
  const filter = { _id: userId };
  const update = { $pull: { transactions: { _id: transactionId } } };
  const options = {
    returnDocument: "after",
    projection: { password: 0, email: 0, session: 0 },
  };

  return db.usersCollections.findOneAndUpdate(filter, update, options);
}

async function update(
  userId,
  transactionId,
  transactionValue,
  transactionDescription
) {
  const filter = {
    $and: [{ _id: userId }, { "transactions._id": transactionId }],
  };
  const update = {
    $set: {
      "transactions.$.value": transactionValue,
      "transactions.$.description": transactionDescription,
    },
  };
  const options = {
    returnDocument: "after",
    projection: { password: 0, email: 0, session: 0 },
  };

  return await db.usersCollections.findOneAndUpdate(filter, update, options);
}

export default {
  findByEmail,
  create,
  createSession,
  findByToken,
  createTransaction,
  del,
  update,
};
