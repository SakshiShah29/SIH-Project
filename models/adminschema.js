const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  admin: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
});

const Admin = mongoose.model("AdminSchema", Schema);

module.exports = Admin;
