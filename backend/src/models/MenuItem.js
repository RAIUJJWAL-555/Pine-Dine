import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant"
  },

  name: {
    type: String,
    required: true,
    minlength: 3
  },

  description: {
    type: String
  },

  price: {
    type: Number,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  image: {
    type: String
  },

  isAvailable: {
    type: Boolean,
    default: true
  }
})

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

export default MenuItem;