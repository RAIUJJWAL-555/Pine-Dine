import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 5
    },

    phone: {
      type: String,
      required: true
    },

    role: {
      type: String,
      enum: ["consumer", "restaurant", "courier", "admin"],
      default: "consumer"
    },

    address: {
      type: String,
      required: true
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
    }
  },
},
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;