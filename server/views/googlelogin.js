const express = require("express");
const googlelogin = new express();
const bodyParser = require("body-parser");
googlelogin.use(bodyParser.urlencoded({ extended: false }));
googlelogin.use(bodyParser.json());
const signup = require("../models/studentschema");
const { isNotEmpty } = require("../views/signup");
const { assigntoken } = require("../views/jwt");

const { OAuth2Client } = require("google-auth-library");
const cors = require("cors");
const loginRouter = require("./login");
googlelogin.use(cors());

const client = new OAuth2Client(process.env.CLIENT_ID);

googlelogin.post("/", async (req, res) => {
  //This is the token that is sent to us by the frontend
  const { token } = req.body;

  let _token;

  //This basically means that the express REST Api server talks with the google's OAuth service and verifies the token by decoding it
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });

  //Now this ticket that is returned is an object from which we can access the basic information of the signed in user
  const { name, email, picture, password } = ticket.getPayload();
  const obj = { name, email };
  console.log(obj);

  await signup
    .find({ email: obj.email }, async (err, data) => {
      if (err) {
        console.log("This is the error");
        console.log(err);
        res.json({
          status: "Not ok",
          error: err,
        });
        reject(err);
        return;
      }

      //This basically checks whether or not any data is returned after it is searched for in the database
      if (isNotEmpty(data)) {
        console.log("The user is succesfully logged in");
        _token = await assigntoken(obj.name, obj.email);
        console.log("This is the returned jwt token");
        console.log(_token);

        await res.cookie("jwt", _token, {
          expires: new Date(Date.now() + 900000),
          httpOnly: true,
        });

        await res.json({
          status: "Ok",
          token: _token,
          body: {
            name: obj.name,
            email: obj.email,
            password: "google-password",
            error: false,
          },
        });
      } else {
        console.log("Some information about the user is still pending");
        res.json({
          body: {
            name: obj.name,
            email: obj.email,
            password: "google-password",
          },
          status: "Not Ok",
          error: "Some information is still pending please try signing Up",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = googlelogin;
