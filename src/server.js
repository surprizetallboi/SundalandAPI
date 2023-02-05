require("dotenv").config();

const express = require("express");
const serverless = require("serverless-http");
const app = express();

const router = express.Router();

// const mongoose = require("mongoose");
// const queryType = require("query-types");
// app.use(queryType.middleware());

// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
// const db = mongoose.connection;
// db.on("error", (error) => console.error(error));
// db.once("open", () => console.log("Connected"));

// app.use(express.json());

router.get("/", (req, res) => {
  res.json({
    "hello": "hjjjji",
  });
});



// const itemsRouter = require("../routes/items");
app.use("/.netlify/functions/server", router);
module.exports.handler = serverless(app);

app.listen(3000, () => console.log("Server Started"));
