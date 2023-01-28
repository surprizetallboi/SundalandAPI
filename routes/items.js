const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Item = require("../model/item");


router.get("/", async (req, res) => {
  const item = await Item.find();
  res.send(item);
});

router.get("/categories/:category", async (req, res) => {
  const item = await Item.find({ catagory: req.params.category });
  // console.log(typeof req.query.onSale);
  res.send(item);
  
});

router.get("/:itemID", async (req, res) => {
  const item = await Item.findOne({ _id: req.params.itemID });
  res.send(item);
});


module.exports = router;
