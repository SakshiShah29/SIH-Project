const mongoose = require("mongoose");
const Profile = require("./profileschema");

const Schema = new mongoose.Schema({
  ids: {
    type: Array,
    validate: validator((element) => {
      //This is the validator which checks whether two ids that are passed are correct or not
      let id1 = element[0];
      let id2 = element[1];

      console.log(id1, id2);
    }),
  },
  messages: {
    type: Array,
    validate: validator((element) => {
      //Ok this is the validator which checks that the message that is sent has three things
      //The first and the second parameter of the message are the profile ids of the respective students
      let;
    }),
  },
});
