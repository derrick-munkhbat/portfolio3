import pkg from "pg";
const { Pool } = pkg;

import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 8000,
});

export async function createUser(name, email, message) {
  const text =
    "INSERT INTO users(name, email, massage) VALUES($1, $2, $3) RETURNING *";
  const values = [name, email, message];
  try {
    const result = await pool.query(text, values);
    return result.rows[0];
  } catch (err) {
    console.error(err);
    return null;
  }
}

export default pool;
