const express = require("express");

const uploadrouter = express.Router();

// const uploadrouter = express();
require("dotenv").config();

const bodyparser = require("body-parser");
const multer = require("multer");

const cookieParser = require("cookie-parser");
const { verifytoken } = require("./jwt");

//This is the model
const Uploadproject = require("../models/projectuploadschema.js");
const Profile = require("../models/profileschema.js");
const Signup = require("../models/studentschema");
const Admin = require("../models/adminschema");
const { findOne } = require("../models/adminschema");

const {
  triggeradmin,
} = require("../adminlogin/scripts/projectuploadtransaction");

// This is the router for the project upload functionality

uploadrouter.use(bodyparser.json());

uploadrouter.use(express.json());
uploadrouter.use(authorized);
uploadrouter.use(checkifexists);
uploadrouter.use(cookieParser());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./projectuploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

uploadrouter.post(
  "/",
  // upload.single("file"),
  async (req, res) => {
    // The id is the profile id of the student who is uploading the project
    // Firstly we need to check whether the person who is uploading the project has a profile or not
    // We also need to check whether the other collaborators has the profile or not
    //Hence basically the sign in is embedded inside the profile which in turn is embedded inside the uploads
    console.log("This is the body that was returned from the frontend");
    console.log(req.body);

    // const myimage = await fs.readFileSync(
    //   `./projectuploads/${req.file.filename}`
    // );
    // console.log(myimage);

    //{ $push: { images: myimage } }
    // Uploadproject.findByIdAndUpdate(
    //   req.params.id,
    //   { $push: { images: myimage } },
    //   (err, data) => {
    //     if (err) {
    //       res.status(404).json({
    //         status: "Not ok",
    //         error: err,
    //       });
    //     }
    //   }
    // );

    //Now as we have the body available with us let us upload the project on the database
    //Once the project is uploaded to the database the next step is to trigger the event so that the project is now available to admin
    await Uploadproject.create(
      {
        title: req.body.title,
        abstract: req.body.abstract,
        collaborators: [`${req.body.collaborators}`],
        projectcompletion: req.body.completed,
        projecturl: req.body.url,
        leadaccountaddress: req.body.obj.current.useraddress,
        leadprofileid: req.body.obj.current.profileid,
        adminaddress: req.body.obj.current.admin,
      },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log("This is the data that is returned");
          console.log(data);
          //Now that we have the data available with us the next step is to trigger the admin that the data is uploaded
          triggeradmin(
            req.body.obj.current.useraddress,
            req.body.obj.current.admin,
            data._id,
            req.body.obj.current.college,
            req.body.privatekey
          );
        }
      }
    );
    await res.status(200).json({
      status: "Ok",
    });
  }
);

uploadrouter.get("/details", async (req, res) => {
  let jwt = req.headers.jwt;
  console.log(jwt);
  if (!req.headers.jwt) {
    res.status(404).json({
      status: "Not Ok",
      error: "The user needs to login to upload the projects",
    });
  } else {
    //Now as the cookie is returned from the user the next step is to check whether the returned cookie is valid or not
    let validcookie = await verifytoken(req.headers.jwt);
    console.log("The data that is returned after verifying the token is");
    console.log(validcookie);

    if (validcookie == undefined) {
      res.status(404).json({
        error:
          "The user has not logged in yet or the login session has expired",
      });
    }

    //Now based on the data we need to find the object id so that the profile of that student can be accessed
    Signup.findOne({ email: validcookie.email }, async (err, data) => {
      if (err) {
        res.status(404).json({
          status: "Not Ok",
          error: err,
        });
      }
      console.log(data);
      console.log(data._id.toString());
      console.log(data.Institute);
      let data1 = await Profile.findOne({ id: data._id.toString() });
      let data2 = await Admin.findOne({ university: data.Institute });

      // console.log(data1);
      // console.log(data2);
      if (data1 == null) {
        res.status(404).json({
          status: "Not Ok",
          error: "The profile page of the user has not been created yet",
        });
      }

      if (data2 == null) {
        res.json({
          status: "Not Ok",
          error:
            "The admin for the particular univeristy has not been assigned yet",
          contactmasteradmin: true,
        });
      }

      res.status(200).json({
        status: "Ok",
        college: data.Institute,
        profileid: data1.id,
        admin: data2.admin,
      });
    });
    //At the same time we also need to find the admin address of the university
  }
  //Now we have got the jwt and based on that we are going to fetch the account address of the admin
});

//Before uploading the project we need to check whether the person who is uploading the project has a profile or not
function checkifexists(req, res, next) {
  let result = req.body;
  console.log("This is the checkifexists function which checks for it");
  console.log(result);
  next();
}

//This is the route which receives the body and then it saves the data into the database
function authorized(req, res, next) {
  console.log(
    "This is the middleware which accepts the request object and verifies whether the student is authorized to acces this or not"
  );

  //Now we are printing the cookie that we got from the backend. The cookie contains the jwt that is used for authentication
  //purposes
  // console.log(req.headers.jwt);
  // console.log(req.headers.cookie);
  next();
}

//This is the router which gets the details of the project based on the project Id
uploadrouter.get("/:id", (req, res) => {
  //Now this is the id that is passed inside the params
  let id = req.params.id;
  console.log(id);
  id = new Object(id);
  Uploadproject.findById(id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(404).json({
        status: "Not Ok",
        error: err,
      });
    } else {
      console.log("This is the data that we get from the profile id");
      console.log(data);
      res.json({
        data,
      });
    }
  });
});

module.exports = uploadrouter;
