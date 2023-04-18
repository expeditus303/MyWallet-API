import db from "../config/database.connection.js";

async function findByEmail({ email }) {
  return db.usersCollections.findOne({ email });
}

async function create({ name, email, password }) {
  return db.usersCollections.insertOne({ name, email, password });
}

export default { findByEmail, create };
