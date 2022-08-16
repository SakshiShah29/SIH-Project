//Here we are creating a schema and a model for the signup of the users

//This is including the mongoose package

//In mongoose, a schema represents the structure of a particular document
//A model on the other hand is a programming interface with the help of which we can interact with the documents in the database
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

var hashedpassword;

//We are creating a schema object
const StudentSchemaSignUp = mongoose.Schema({
  Name: {
    type: String,
    required: [true, "Every user should mention their Name"],
  },
  email: {
    type: String,
    required: [true, "Every user should mention their email id"],
    unique: true,
    // validate: {
    //   validator: function (val) {
    //     //Lets say the value is cat
    //     //This is a chaining function which does 3 things
    //     //1)split() function splits the characters of the string into an array and the array becomes ['c','a','t'];
    //     //2)The reverse function reverses the given array ['t','a','c']
    //     //3)The join function joins the elements of the array and converts it back into a string "tac"
    //     let arr = val.split("");
    //     console.log(arr);
    //     let another = arr.reverse();
    //     let reverse = another.join("");
    //     console.log(reverse);
    //     if (reverse.substring(0, 9) === "moc.liamg") {
    //       return true;
    //     } else if (reverse.substring(0, 10) === "ni.itagarp") {
    //       return true;
    //     }
    //     return false;
    //   },
    // },
  },
  password: {
    type: String,
    default: "google-password",
  },
  Institute: {
    type: String,
    required: [true, "Every user should mention their Institute Name"],
  },

  Phone_number: {
    type: Number,
    required: [true, "We do require a phone number"],
    //min and max are also validators
    unique: true,
    minlength: 10,
    maxlength: 10,
  },
  Domains_of_interest: {
    type: String,
    required: [true, "Every user should mention their Domains of Interest"],
  },

  admin: {
    type: Boolean,
    required: true,
    default: false,
  },
  masteradmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});

// StudentSchemaSignUp.pre("save", async function (next) {
//   bcrypt.genSalt(7, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     bcrypt.hash(this.password, result, (err, data) => {
//       this.password = data;
//     });
//   });
//   next();
// });
// StudentSchemaSignUp.pre("save", async function (next) {
//   console.log("The password is being hashed");
//   console.log(this.password);
//   this.password = await bcyrpt.hash(this.password, 12);
//   console.log("The password is now hashed");
//   console.log(this.password);
//   next();
// });

// const StudentLogin = mongoose.model("StudentLogin", StudentSchemaLogin);
const StudentSignUp = mongoose.model("StudentSignUp", StudentSchemaSignUp);
module.exports = StudentSignUp;
