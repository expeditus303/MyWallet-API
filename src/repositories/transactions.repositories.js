import db from "../config/database.connection.js";

async function create({newUserId, transactions}) {
    return db.transactionsCollections.insertOne({newUserId, transactions})
}

export default { create }