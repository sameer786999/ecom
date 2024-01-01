const express = require("express");
const app = express();

const port = 5000;

const mongoDB = require("./db");
mongoDB();

// Set up CORS middleware before other middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Parse JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", require("./Routes/CreateUser"));

app.listen(port, () => {
  console.log(`Sunnai De raha hain, behra nahi hun main! ${port}`);
});
