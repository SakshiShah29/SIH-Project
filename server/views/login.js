const express = require("express");

//Again we are calling the express function to create a loginRouter object by which we can use the different routes
const loginRouter = new express();

//Express body-parser is an npm library used to process data sent through an HTTP request body.
const bodyParser = require("body-parser");
const cors = require("cors");

const bcrypt = require("bcrypt");

loginRouter.use(bodyParser.urlencoded({ extended: false }));

//Here we are importing the user schema to check whether the entered details of the user are correct or not
const login = require("../models/studentschema");

const { assigntoken } = require("./jwt");
//This basically parses the incoming HTTP requests
//parse() is used for parsing data that was received as JSON; it deserializes a JSON string into a JavaScript object.
//JSON. stringify() on the other hand is used to create a JSON string out of an object or array; it serializes a JavaScript object
//into a JSON string.
loginRouter.use(bodyParser.json());
loginRouter.use(express.json());

const isNotEmpty = (arr) => {
  if (arr[0]) {
    return true;
  }

  return false;
};

loginRouter.post("/login", async (req, res) => {
  let { email, password } = await req.body;
  console.log(email);
  console.log(password);
  let _token;

  //Now as we have the email id and the password available with us let us verify if the entered details are actually correct or not

  login.find({ email: req.body.email }, async (err, data) => {
    if (err) {
      console.log(err);
      res.json({
        status: "Not ok",
        error: err,
      });
    }

    console.log("This is the returned data");
    console.log(data);

    console.log(data.length);
    console.log(typeof data.length);

    if (data.length == 0) {
      console.log("This ran");
      res.json({
        status: "Not Ok",
        error: "The user is not found. Please Sign Up",
      });
    }

    //Now from the returned data we need to extract the Name nad the university of the student
    let name = data[0].Name;
    let university = data[0].Institute;

    //This means that the user data is now available with us

    if (isNotEmpty(data)) {
      //This means that the email id is found
      console.log("The emailid is found");
      let oldpassword = data[0].password;
      console.log(oldpassword);

      //Now as the email is found the next step is to compare the password that the user entered with the hashed password that is saved
      //in the database
      await bcrypt.compare(password, oldpassword, async (err, result) => {
        console.log("Is it even comparing the data");
        if (err) {
          console.log(err);
          res.json({
            status: "Not ok",
            error: err,
          });
        }

        console.log(result);

        if (result == false) {
          res.json({
            status: "Not Ok",
            error: "The email id or the password you have entered is wrong",
          });
        }

        if (result == true) {
          _token = await assigntoken(name, email, university);

          await res.cookie("jwt", _token, {
            expires: new Date(Date.now() + 900000),
            httpOnly: true,
          });

          await res
            // .cookie("jwt", _token, {
            //   expires: new Date(Date.now() + 900000),
            //   httpOnly: true,
            // })
            .json({
              status: "Ok",
              token: _token,
              body: {
                email,
                password,
              },
              token: _token,
            });
        }
      });
    } else {
      // throw new Error("Please try signing up before logging in");
      console.log("Please try signing up before logging in");
      res.json({
        status: "Not ok",
        error: "Please try signing up before logging in",
      });
    }
  });

  // new Promise((resolve, reject) => {
  //   login.find({ email: req.body.email }, (err, data) => {
  //     if (err) {
  //       console.log(err);
  //       reject(err);
  //     }

  //     console.log("This is the returned data");
  //     console.log(data);
  //     console.log(data.name);
  //     if (isNotEmpty(data)) {
  //       //This means that the email id is found in the database we now need to check for the password
  //     } else {
  //       reject("The user needs to sign up first");
  //     }
  //   });
  // })
  //   .clone()
  //   .then(() => {
  //     console.log("The login is successful");
  //     _token = assigntoken(email);
  //   })
  //   .then(() => {
  //     res.json({
  //       status: "Ok",
  //       token: _token,
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.json({
  //       error: err,
  //     });
  //   });
});

module.exports = loginRouter;
