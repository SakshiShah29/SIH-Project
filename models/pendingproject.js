const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  adminaddress: {
    type: String,
    required: true,
  },

  studentaddress: {
    type: String,
    required: true,
  },

  projectId: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Pendingproject = mongoose.model("Pendingproject", Schema);

module.exports = Pendingproject;
