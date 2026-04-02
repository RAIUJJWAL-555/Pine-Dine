import mongoose from "mongoose";

const courierSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    currentLocation: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point"
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true
      }
    },

    availability: {
      type: Boolean,
      default: true
    },

    assignedOrderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true
    },

    earnings: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

courierSchema.index({ currentLocation: "2dsphere" });

const Courier = mongoose.model("Courier", courierSchema);

export default Courier;