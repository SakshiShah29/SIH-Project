const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const detectorrouter = new express.Router();
const Projectupload = require("../models/projectuploadschema");
const fs = require("fs");

detectorrouter.use(cors());
detectorrouter.use(bodyparser.json());
detectorrouter.use(express.json());

detectorrouter.post("/check", async (req, res) => {
  let { data, path1, path2 } = req.body;
  let datareceived = data;
  //Now the first step is to find all the projects that were uploaded before this project id
  await Projectupload.find({}, (err, data) => {
    if (err) {
      console.log("An error occured while querying the database");
      console.log(err);
      res.status(404).json({
        status: "Not Ok",
        error: err,
      });
    } else {
      console.log(
        "This is the data that is returned after querying the database"
      );
      console.log(data);

      //Now once we get all the documents of the database the next step is to find the documents till that particular document
      let data2 = [];
      let startingindex = 0;
      while (data[startingindex]._id != datareceived._id) {
        data2.push(data[startingindex]);
        startingindex++;
      }

      console.log("This is the array that is returned after filtering");
      console.log(data2);

      //Now we have the array of documents before that particular document
      //And we also have the document which needs to be compared

      //First of all we make two directories inside the desktop
      try {
        fs.mkdir(path1, { recursive: true }, (err) => {
          if (err) throw err;
        });
      } catch (error) {
        console.log(error);
      }

      try {
        fs.mkdir(path2, { recursive: true }, (err) => {
          if (err) throw err;
        });
      } catch (error) {
        console.log(error);
      }

      //Now we have made two folders
      //The next step is to create the text files inside these folders
      for (let i = 0; i < data2.length; i++) {
        try {
          fs.writeFileSync(`${path1}/${i}.txt`, data2[i].title);
          fs.writeFileSync(`${path2}/${i}.txt`, data2[i].abstract);
        } catch (error) {
          console.log(error);
        }
      }

      try {
        fs.writeFileSync(`${path1}/check.txt`, datareceived.title);
        fs.writeFileSync(`${path2}/check.txt`, datareceived.abstract);
      } catch (error) {
        console.log(error);
      }
    }
  });
});

module.exports = detectorrouter;
