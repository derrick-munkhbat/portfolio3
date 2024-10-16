import express from "express";

const app = express();
const PORT = process.env.PORT || 8000; // Use a default port if not specified

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
