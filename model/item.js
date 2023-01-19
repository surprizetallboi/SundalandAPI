const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  prince: {
    type: Number,
    required: true,
  },
  itemType: {
    wear: {
      type: String,
      required: true,
    },
    catagory: {
      type: String,
      required: true,
    },
  },
  isOnSale: {
    type: Boolean,
    required: true,
  },

  isInStock: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Item", itemSchema)