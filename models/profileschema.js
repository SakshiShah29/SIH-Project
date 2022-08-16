const mongoose = require("mongoose");
const { isNotEmpty } = require("../views/signup");

//Here we are importing the student schema which is important for the validator function
const Student = require("./studentschema");

const Schema = mongoose.Schema({
  id: {
    type: String,
    required: [
      true,
      "We need the object id of the data that is stored in the sign in",
    ],
    // validate: {
    //   validator: async function (val) {
    //     //The task of the validator is to check whether any document with the given Id is present or not
    //     await Student.findById(val, (err, data) => {
    //       if (err) {
    //         console.log(err);
    //         return [
    //           false,
    //           "Some error occured when trying to access the data from the database",
    //         ];
    //       } else {
    //         console.log("This is the data inside the profileschema model");
    //         console.log(data);
    //         if (isNotEmpty(data)) {
    //           return true;
    //         } else {
    //           return [
    //             false,
    //             "There is some error please try again or try signing up first",
    //           ];
    //         }
    //       }
    //     });
    //   },
    // },
  },

  branch: {
    type: String,
    maxLength: 20,
  },

  interests: {
    type: Array,
    validate: {
      validator: function (val) {
        //So this validator basically checks whether the values that are passed to the array smaller than or equal to 3 or not
        console.log("This is the validator for the interests");
        console.log(val);
        console.log(val.length);
        console.log(val.length <= 3);
        if (val.length <= 3) {
          return true;
        } else {
          return false;
        }
      },
    },
  },

  description: {
    type: String,
    minLength: 10,
    maxLength: 300,
  },

  profilepic: {
    type: Buffer,
  },

  ongoing_projects: {
    type: Array,
  },

  completed_projects: {
    type: Array,
  },

  accountaddress: {
    type: String,
  },
});

let Profile = mongoose.model("Profile", Schema);

module.exports = Profile;
