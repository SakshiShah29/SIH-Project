const express = require("express");
const jwt = require("jsonwebtoken");
var token;
require("dotenv").config();

//Here the jwt is basically a token that is used for user authentication
//How this works is that whenever a student logs in the server creates a valid jwt for that student based on three factors
//The jwt basically comprises of the headers which is the metadata , payload which is usually some information about the user
//and the third is the secret

//Based on these three parameters a string is created and this jwt is then sent to the user

//Now if the user wants to access certain parts of the portal then the portal decodes the jwt and verifies it
async function assigntoken(name, email, university) {
  //This is the data that was passed here by the user
  // console.log(name);
  // console.log(email);
  // console.log(university);
  // console.log("This is the data that was passed to the user");
  let obj = {
    name,
    email,
    university,
    student: true,
    admin: false,
    masteradmin: false,
    faculty: false,
  };
  let token;
  let data = await jwt.sign(obj, process.env.SECRET_KEY, { expiresIn: "90d" });
  return data;
  // new Promise((resolve, reject) => {
  //   jwt.sign(obj, "teampragatisecret", { expiresIn: "90d" }, (err, data) => {
  //     if (err) {
  //       console.log(err);
  //     }

  //     console.log("So this is the token");
  //     console.log(data);
  //     token = data;
  //     resolve(7);
  //   });
  // }).then((data) => {
  //   console.log("Now the token is returned to the user");
  //   return token;
  // });
}

async function assigntokenadmin(accountaddress) {
  let obj = { accountaddress, admin: true, faculty: true, masteradmin: false };
  let token;
  let data = await jwt.sign(obj, process.env.SECRET_KEY, { expiresIn: "90d" });
  return data;
}

async function verifytoken(token) {
  //In the verification process the the token the jwt.verify function is used
  let _data;
  // console.log("Verification is going on");

  //This is the asynchronous version of the verify token
  await jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
    // console.log(data);
    // console.log("Ok so this is the data");
    _data = data;
  });

  // await console.log("This is the data after the verification process");
  // await console.log(_data);

  return _data;
}

module.exports = { assigntoken, verifytoken };
