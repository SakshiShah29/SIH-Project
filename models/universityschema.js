const mongoose = require("mongoose");

const U_Schema = mongoose.Schema({
  S_No: {
    type: String,
    required: true,
  },
  University: {
    type: String,
    required: true,
  },
  College: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
  District: {
    type: String,
    required: true,
  },
});

const University = mongoose.model("University", U_Schema);

module.exports = University;
