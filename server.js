require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const queryType = require("query-types");

app.use(queryType.middleware());

const Item = require("./model/item");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected"));

app.use(express.json());

const itemsRouter = require("./routes/items");
app.use("/items", itemsRouter);

app.listen(3000, () => console.log("Server Started"));
