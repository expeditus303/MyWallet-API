import { MongoClient } from "mongodb";
import "dotenv/config";

export const connectionString = process.env.DATABASE_URL;

const mongoClient = new MongoClient(connectionString);

try {
  await mongoClient.connect();
  console.log(`Database connection established successfully`);
} catch (err) {
  console.log(err);
}

const db = mongoClient.db();
const transactionsCollections = db.collection("transactions");
const usersCollections = db.collection("users");

export default { transactionsCollections, usersCollections };
