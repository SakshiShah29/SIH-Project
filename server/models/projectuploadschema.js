const mongoose = require("mongoose");

const UploadSchema = new mongoose.Schema({
  title: {
    type: String,
    //The title has some validations inside it
    // required: true,
    minlength: 10,
    maxLength: 30,
  },

  abstract: {
    type: String,
    // required: true,
    minlength: 50,
    maxlength: 500,
  },

  images: {
    type: Array,
    // required: true,

    //Here is the validation
    //The validation states that the elements that are stored in the array must be of type Buffer
    validate: {
      validator: function (val) {
        //This is the value
        console.log(val);
        val.map((ele) => {
          console.log(typeof ele);
        });
      },
    },
  },

  collaborators: {
    type: Array,
    required: true,
  },

  projectstatus: {
    type: String,
    // required: true,
    default: "Pending",
  },

  projectcompletion: {
    type: Boolean,
    required: true,
    default: true,
  },

  techstack: {
    type: Array,
    // required:true
  },
  technologiesused: {
    type: Array,
    // required:true
  },

  projecturl: {
    type: String,
  },

  leadaccountaddress: {
    type: String,
    required: true,
  },

  leadprofileid: {
    type: String,
    required: true,
  },

  adminaddress: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
  leaddomain: {
    type: String,
    required: true,
  },
});

const UploadModel = new mongoose.model("Projectupload", UploadSchema);

module.exports = UploadModel;
