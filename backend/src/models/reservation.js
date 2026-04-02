import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema(
  {
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
    date: {
      type: Date,
      default: Date.now()
    },
    time: {
      type: String,
      required: true
    },
    numberOfGuests: {
      type: Number,
      required: true,
      min: 1
    },
    tableNumber: {
      type: Number,
      required: true,
      min: 1
    },
    status: {
      type: String,
      enum: ["Booked", "Cancelled", "Completed"],
      default: "Booked"
    }
  },
  {
    timestamps: true
  }
);

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;