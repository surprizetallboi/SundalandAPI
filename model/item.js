const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  
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
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  catagory: {
    type: String,
    required: true,
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

module.exports = mongoose.model("item", itemSchema);
