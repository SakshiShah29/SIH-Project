const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const signUp = require("../models/studentschema");
const signup = new express();
const handlingerror = require("./errors");
var hashedpassword;

//This is the profile schema
const Profile = require("../models/profileschema");

signup.use(cors());
signup.use(bodyParser.urlencoded({ extended: false }));
signup.use(bodyParser.json());

const { assigntoken } = require("./jwt");

//How hashing works is that lets say we have a password dhruv
//Now we also have a salt which is a random text everytime
//Now based on the combination of the salt and the password a hash is generated
//The hash for every password is different even if two passwords are exactly same their hashes will be different bcoz of different salts
const hashing = async (password, addingData) => {
  //The size of the salt is 7
  //If you increase the salt size it becomes more and more difficult to decode the hash
  await bcrypt.genSalt(7, (err, result) => {
    if (err) {
      console.log(err);
    }

    bcrypt.hash(password, result, (err, data) => {
      hashedpassword = data;
      addingData();
    });
  });
};

const isNotEmpty = (arr) => {
  if (arr[0]) {
    return true;
  }

  return false;
};

signup.post("/signup", async (req, res) => {
  async function addingData() {
    let _token;
    let _id;

    //This is basically creating a new document inside the collection
    await signUp
      .create({
        Name: req.body.Name,
        email: req.body.email,
        password: hashedpassword,
        Institute: req.body.Institute,
        Phone_number: req.body.Phone_number,
        Domains_of_interest: req.body.Domains_of_interest,
      })
      .then(async () => {
        let data = await signUp.findOne({ email: req.body.email });
        console.log("This is the data inside the 1");
        console.log(data);
        _token = await assigntoken(req.body.name, req.body.email);

        // res.setHeader("set-cookie", [`jwt=${_token}; path=/`]);
        //   domain: "http:localhost:3000",
        //   expires: new Date(Date.now() + 900000),
        //   httpOnly: true,

        // });

        console.log(_token);
        _id = data._id;
        console.log(`This is the id of the data${_id}`);
        await res.json({
          status: "Ok",
          token: _token,
          body: {
            _id,
            Name: req.body.Name,
            email: req.body.email,
            password: hashedpassword,
            Institute: req.body.Institute,
            Phone_number: req.body.Phone_number,
            Domains_of_interest: req.body.Domains_of_interest,
          },
        });
      })
      .catch((err) => {
        console.log("An error is detected");
        let str = handlingerror(err);
        console.log(str);
        res.status(404).json({
          error: err,
          status: "Not ok",
        });
      });

    console.log("The data is added");
    //Hence this means that the data is now added to the database and the signup is now complete
    //As the signup is done now the next step is to create the profile document for that particular user
    Profile.create(
      {
        id: _id,
      },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      }
    );
  }

  //Before we hash the password and save the complete data in our database lets first check the validity of the data
  //The mongoose find is also an async function and thus it offloads the task while the rest of the tasks are executed
  new Promise((resolve, reject) => {
    signUp.find({ email: req.body.email }, (err, data) => {
      if (err) {
        reject(err);
      }
      if (isNotEmpty(data)) {
        // reject("The email id is already registered please try logging in");
        res.status(404).send({
          status: "Not Ok",
          error: "The email id is already registered please try logging in",
        });
      } else {
        resolve(data);
      }
    });
  })
    .then(() => {
      hashing(req.body.password, addingData);
    })
    .catch((err) => {
      res.json({
        error: err,
      });
    });
});

module.exports = { signup, isNotEmpty };
