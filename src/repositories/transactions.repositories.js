import db from "../config/database.connection.js";

async function create({userId, transactions}) {
    return db.transactionsCollections.insertOne({userId, transactions})
}

export default { create }