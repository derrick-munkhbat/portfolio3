import express from "express";
import { createUser } from "./config/database.mjs";

const app = express();
const PORT = process.env.PORT || 8000; // Use a default port if not specified

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/users", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const user = await createUser(name, email, message);
    if (user) {
      res.status(201).json(user);
    } else {
      res.status(500).json({ error: "Failed to create user" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
