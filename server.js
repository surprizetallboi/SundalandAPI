require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Item = require("./item");

async function run() {
  const item = new Item({
    id: 0,
    name: "Daphnopsis",
    color: "Yellow",
    description:
      "Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    price: 80.44,
    catagory: "womens",
    type: "tops",
    isOnSale: false,
    isInStock: true,
  });
  await item.save();
  console.log(item);
}

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected"));

app.use(express.json());

const itemsRouter = require("./routes/items");
app.use("/items", itemsRouter);
// localhost:3000/('/items', itemsRouter)

app.listen(3000, () => console.log("Server Started"));
