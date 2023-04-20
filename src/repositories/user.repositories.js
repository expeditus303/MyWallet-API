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
  return db.usersCollections.updateOne(
    { _id: userId },
    { $push: { transactions: transaction } }
  );
}

async function del(userId, transactionId) {
  return db.usersCollections.updateOne(
    { _id: userId },
    { $pull: { transactions: { _id: transactionId } } }
  );
}

async function update(
  userId,
  transactionId,
  transactionValue,
  transactionDescription
) {
  return db.usersCollections.updateOne(
    { _id: userId, "transactions._id": transactionId },
    {
      $set: {
        "transactions.$.value": transactionValue,
        "transactions.$.description": transactionDescription,
      },
    }
  );
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
