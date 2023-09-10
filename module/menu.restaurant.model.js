const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Restaurant,
      required: true,
    },
    name: {
      type: String,
      require: true,
    },
    veg: {
      type: Boolean,
      default: false,
    },
    non_veg: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Menu", menuSchema);