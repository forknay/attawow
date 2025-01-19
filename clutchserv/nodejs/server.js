const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

const server = app.listen(PORT, () => {


  console.log("Server is running on port 3001")
});