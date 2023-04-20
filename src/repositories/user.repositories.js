import db from "../config/database.connection.js";

async function findByEmail({ email }) {
  return db.usersCollections.findOne({ email });
}

async function create({ name, email, password, session }) {
  return db.usersCollections.insertOne({ name, email, password, session });
}

export default { findByEmail, create };
