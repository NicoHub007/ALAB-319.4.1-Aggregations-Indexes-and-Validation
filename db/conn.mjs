import { MongoClient } from "mongodb";

// allows to access the .env file
import dotenv from "dotenv";
dotenv.config();


const client = new MongoClient(process.env.ATLAS_URI);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db("sample_training");

export default db;
