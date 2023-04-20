import db from "../config/database.connection.js";

async function findByEmail({ email }) {
  return db.usersCollections.findOne({ email });
}

async function create(newUser) {
  return db.usersCollections.insertOne(newUser);
}

async function createSession({_id, token}){
  return db.usersCollections.updateOne({_id}, {$set: {session: token}})
}

export default { findByEmail, create, createSession };
