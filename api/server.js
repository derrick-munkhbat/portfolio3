// backend/server.js
const express = require("express");
const dotenv = require("dotenv");
const messageRoutes = require("./routes/messageRoutes");

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Use message routes
app.use("/api/messages", messageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
