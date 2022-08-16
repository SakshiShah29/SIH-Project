const express = require("express");

const cors = require("cors");
const Pendingproject = require("../models/pendingproject");
const bodyparser = require("body-parser");

const pendingrouter = express.Router();
pendingrouter.use(bodyparser.json());
pendingrouter.use(express.json());
pendingrouter.use(cors());

pendingrouter.post("/", async (req, res) => {
  //Now this posts the data that is returned
  //   Pendingproject.create(
  //     {
  //       adminaddress: req.data.admin,
  //       studentaddress: req.data.student,
  //       projectId: req.body.projectId,
  //       university: req.body.university,
  //     },
  //     (err, data) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         console.log(
  //           "This is the data that is saved in the database after the student has uploaded the project"
  //         );
  //         console.log(data);
  //       }
  //     }
  //   );
  console.log("These were the values returned from the post request");
  Pendingproject.create(
    {
      adminaddress: req.body.admin.toLowerCase(),
      studentaddress: req.body.student,
      projectId: req.body.projectId,
      university: req.body.university,
    },
    (err, data) => {
      if (err) {
        console.log(err);
        res.status(404).json({
          status: "Not Ok",
          error: err,
        });
      } else {
        console.log("The data is successfully added");
        console.log(data);
      }
    }
  );
});

module.exports = pendingrouter;
