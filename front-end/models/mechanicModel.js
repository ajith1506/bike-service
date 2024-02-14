const mongoose = require("mongoose");

const mechanicSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    firstName: {
      type: String,
      required: [true, "first name is required"],
    },
    lastName: {
      type: String,
      required: [true, "first name is required"],
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    website: {
      type: String,
    },
    address: {
      type: String,
    },
    specialization: {
      type: String,
    },
    experience: {
      type: String,
    },
    feesPerCunsaltation: {
      type: Number,
    },
    status: {
      type: String,
      default: "pending",
    },
    timings: {
      type: Object,
    },
  },
  { timestamps: true }
);

const mechanicModel = mongoose.model("mechanics", mechanicSchema);
module.exports = mechanicModel;
