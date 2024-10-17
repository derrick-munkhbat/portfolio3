const express = require("express");
const router = express.Router();
const { neon } = require("@neondatabase/serverless");

// Extract connection details from environment variables
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// Create the SQL client using the connection string
const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
);

// Define a route to get messages
router.get("/messages", async (req, res) => {
  try {
    const messages = await sql`SELECT * FROM messages`; // Adjust the query as needed
    res.json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Define a route to post a new message
router.post("/", async (req, res) => {
  const { first_name, last_name, email, phone_number, message } = req.body;

  // Validate the request body
  if (!first_name || !last_name || !email || !phone_number || !message) {
    return res.status(400).json({ error: "All fields are are required." });
  }

  try {
    // Insert the new message into the database
    await sql`INSERT INTO messages (first_name, last_name, email, phone_number, message) VALUES (${first_name}, ${last_name}, ${email}, ${phone_number}, ${message})`;

    // Respond with a success message
    res.status(201).json({ message: "Message created successfully!" });
  } catch (error) {
    console.error("Error posting message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
