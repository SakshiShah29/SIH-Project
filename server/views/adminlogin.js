//So this is the admin login functionality

//We are basically using the smart contracts for the admin login page

//So what exactly happens is that owner assigns some passwords to the admin addresses for the universities smart contract
//Now based on the private key of the admin of each university a transaction is sent and based on the results of the transaction
//they are logged in

const express = require("express");
const cors = require("cors");
const Pendingproject = require("../models/pendingproject");

const { send, createadmin } = require("../adminlogin/scripts/sendtransaction");

// const bodyparser = require("body-parser");

const adminrouter = express.Router();

// adminrouter.use(bodyparser);

adminrouter.use(express.json());
adminrouter.use(cors());

adminrouter.use(authorized);

function authorized(req, res, next) {
  //This function basically checks whether the person that is logged in is authorized to use the this route or not
  console.log("This route is authorized");
  next();
}

adminrouter.post("/login", async (req, res) => {
  let { address, privatekey } = req.body;
  console.log(address);
  console.log(privatekey);
  try {
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "Not ok",
      error: err,
    });
  }
  let result = await send(address, privatekey);
  console.log(result);
  console.log("The transaction is sent successfully");
  if (result) {
    res.status(200).json({
      status: "Ok",
      text: "The transaction has been executed successfully the admin can login",
    });
  } else {
    res.status(404).json({
      status: "Not Ok",
      error: "The transaction has failed and reverted back",
    });
  }
});

adminrouter.get("/eventdetails/:admin", async (req, res) => {
  //Now instead of this array we need the array for all the projects that are associated with the admin
  let body;
  console.log("This is the params data");
  console.log(req.params.admin);
  console.log(typeof req.params.admin);
  Pendingproject.find({ adminaddress: req.params.admin }, (err, data) => {
    if (err) {
      console.log(err);
      res.status(404).json({
        status: "Not Ok",
        error: err,
      });
    } else {
      console.log(data);
      let eventsdata = [
        "This is just the testing data",
        "This is testing data 2",
        "This is testing data part 3",
      ];
      res.json({
        status: "Ok",
        data: data,
      });
    }
  });
});

adminrouter.post("/masteradmin", async (req, res) => {
  let { masteradmin, admin, privatekey, university } = req.body;
  console.log(masteradmin);
  console.log(admin);
  console.log(privatekey);
  console.log(university);
  try {
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "Not Ok",
      error: err,
    });
  }

  let result = await createadmin(admin, masteradmin, privatekey, university);
  console.log(result);
  console.log("The transaction is sent successfully");
  if (result) {
    res.status(200).json({
      status: "Ok",
      text: "The transaction has been executed successfully the admin can login",
    });
  } else {
    res.status(404).json({
      status: "Not Ok",
      error: "The transaction has failed and reverted back",
    });
  }
});

module.exports = adminrouter;
