import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true
  },

  items: [
    {
      menuItemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem",
        required: true
      },
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      },
      price: {
        type: Number,
        required: true,
        min: 0
      }
    }
  ],

  totalAmount: {
    type: Number
  },

  status: {
    type: String,
    enum: ["Accepted", "Preparing", "Delivered"],
    default: "Delivered"
  },

  deliveryAddress: {
    type: String,
    required: true
  },

  deliveryLocation: {
    type: {
        type: String,
        enum: ["Point"],
        required: true,
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true,
      },
  },

  courierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Courier",
    required: true
  },

  paymentStatus: {
    type: String,
    enum: ["Pending", "Completed"],
    default: "Pending"
  }
}, {
  timestamps: true
});

orderSchema.index({ location: "2dsphere" });

const Order = mongoose.model("Order", orderSchema);

export default Order;