import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    description: {
      type: String
    },

    cuisine: {
      type: String,
    },

    rating: {
      type: Number,
      default: 0,
    },

    location: {
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

    address: {
      type: String,
      required: true
    },

    tablesAvailable: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

// 🔥 Important for geo search (Week 2 me use hoga)
restaurantSchema.index({ location: "2dsphere" });

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;