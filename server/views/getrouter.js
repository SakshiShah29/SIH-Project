const express = require("express");
const getrouter = express.Router();
const { verifytoken } = require("./jwt");
const cors = require("cors");
const studentschema = require("../models/studentschema");
getrouter.use(cors());
getrouter.use(express.json());

getrouter.post("/", async (req, res) => {
  //We get the jwt here
  let jwt = req.body;
  // console.log("This is the jwt we got from the frontend");
  // console.log(jwt._jwt);

  //Now we verify this jwt and get details
  let data = await verifytoken(jwt._jwt);
  await console.log("This is the again the jwt", data);

  if (data == undefined) {
    //This means that for the particular jwt it was not able to find any information from the backend
    res.json({
      error: "The user you are searching for is not found",
    });
  }
  //Now once we have the data available with us the next step is to find the particular document and then from that
  //document find the profileId

  studentschema.find({ email: data.email }, (err, data) => {
    if (err) {
      res.json({
        error: "There was some error while trying to fetch the profile data",
      });
    }

    console.log(data);

    //Now as we have the data for that particular email the next step is to return that profile id to the frontend
    res.status(200).json({
      status: "Ok",
      data: data[0]._id,
      data2: data,
    });
  });
});

module.exports = getrouter;
