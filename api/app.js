// Load environment variables from .env file
require("dotenv").config();
const express = require("express");
const { neon } = require("@neondatabase/serverless");

// Create an Express application
const app = express();

// Extract connection details from environment variables
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// Create the SQL client using the connection string
const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
);

// Import the messages routes
const messagesRoutes = require("./routes/messages");

// Middleware to parse JSON bodies
app.use(express.json());

// Use the messages routes directly
app.use(messagesRoutes); // No base path, routes will be accessible directly

// Your existing function to get PostgreSQL version, if needed
async function getPgVersion() {
  try {
    const result = await sql`SELECT version()`;
    console.log("PostgreSQL Version:", result[0]);
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

// Call the function to test the connection
getPgVersion();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Backend is running!");
});
