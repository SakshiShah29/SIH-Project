//This is the profile page view file
//So basically this file will have all the routes that are neccasary for the profile page

//It will have the CRUD operations

//1) Read- which will get all the user data from the backend and display it on the page
//So for reading as some data is already available with us when the user signed up we would create one more document
//This document would contain the additional details as well as use the concept of referencing for referencing that document
//with the signup document. Here there is a concept of one-one referencing

//2)Write- So there are some more details that needs to be filled such as profile picture, interests and descriptions

//3) Update- This basically allows to update the profile

//4) Delete- To delete some contents of the profile we need this route handler

//5) See the project titles of the user that are ongoing and completed. We only need the project titles and nothing else

const express = require("express");
const cors = require("cors");
//This is the cookie parser package which we will use to get all the cookies that are stored in the browser
const cookieParser = require("cookie-parser");

const { verifytoken } = require("./jwt");
const fs = require("fs");

// console.log(cookieParser);
//This is creating the route object

const profile = express();
profile.use(cors({ credentials: true }));
profile.use(cookieParser());

const handlingerrors = require("./errors");

//We are importing the multer library
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

const bodyparser = require("body-parser");
const Profile = require("../models/profileschema");
const { json } = require("body-parser");
const e = require("express");
const { runInNewContext } = require("vm");
profile.use(bodyparser.urlencoded({ extended: false }));

profile.use(bodyparser.json());
profile.use(express.json());

// //This is the second middleware function to check whether the user has signed up or not and if not don't allow access
// function allowed(req, res, next) {
//   console.log("The allowed function is working");
//   next();
// }

profile.use(authorized);
// profile.use(allowed());

profile.get("/", async (req, res) => {
  res.status(200).json({
    msg: "Hello World",
  });
});

//This is the route that handles the get requests
profile.get("/:id", async (req, res) => {
  //First we check whether the id passed is same as the req.body.id or not
  try {
    // if (req.params.id == req.body._id) {
    //Now as the ids match this means that only the real user is trying to see their profile

    //Now we are matching the id from the database
    Profile.findOne({ id: req.params.id }, (err, data) => {
      if (data) {
        // console.log("This is the data of the profile");
        // console.log(data);
        res.status(200).json({
          status: "Ok",
          data: data,
        });
      } else {
        res.status(404).json({
          status: "Not ok",
          error: "The user that you are looking for is not found",
        });
      }
    });
    // } else {
    //   res.json({
    //     status: "Not ok",
    //     error: "The ids passed in the parameter and the body should match",
    //   });
    // }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "Not ok",
      error,
    });
  }
});

//This is the update request which is used for updating the data inside the profile
profile.post(
  "/uploadprofilepic/:id",
  upload.single("file"),
  async (req, res) => {
    const myimage = await fs.readFileSync(`./uploads/${req.file.filename}`);
    // fs.writeFileSync(
    //   "C:UsersBhaskarDesktopReact-projectssocial_media_appclient",
    //   myimage
    // );

    console.log(myimage);

    //Now the image is available with us
    //The next step is to upload the image on the database
    Profile.findByIdAndUpdate(
      req.params.id,
      { profilepic: myimage },
      (err, data) => {
        if (err) {
          res.json({
            status: "Not ok",
            error: err,
          });
        }
      }
    );
    await res.json({
      status: "Ok",
    });
  }
);

//This is the route for updating the data in the profile document
profile.put("/updateprofile/:id", async (req, res) => {
  try {
    console.log("Is it even working the updating profile thing?");
    let profile = await Profile.find({ id: req.params.id });
    console.log(profile);
    if (!profile) {
      res.json({
        status: "Not Ok",
        error: "The profile you are trying to search is not found",
      });
    } else {
      console.log("This is the updating part");
      console.log("This is the id that we are updating");
      console.log(profile[0]._id);
      console.log(typeof profile[0]._id);
      let profilesuccess = Profile.findByIdAndUpdate(
        profile[0]._id,
        {
          $set: req.body,
        },
        { runValidators: true },
        (err, data) => {
          console.log(data, "This is the data");
          if (data) {
            // console.log(profilesuccess);
            res.json({
              status: "Ok",
            });
          } else {
            res.json({
              status: "Not Ok",
              error: "For some reason it was unable to update the profile",
            });
          }
        }
      );

      // console.log(profilesuccess);
    }
  } catch (err) {
    // let _err = err.errors;
    res.json({
      status: "Not Ok",
      error: err.message,
    });
  }
});

//This is the route that is used for deleting stuff from the database
profile.delete("/deleteprofile/:id", async (req, res) => {
  let body = await req.body;
  try {
    await Profile.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
      if (err) {
        console.log(err);
        res.json({
          status: "Not Ok",
          error: err,
        });
      }

      console.log(data);
      res.json({
        status: "Not Ok",
      });
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "Not Ok",
      error: error,
    });
  }
});

profile.put("/deleteone/:id", async (req, res) => {
  let body = await req.body;
  console.log(body);
  try {
    let data = await Profile.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    if (data) {
      res.json({
        status: "Ok",
      });
    } else {
      res.json({
        status: "Not Ok",
        error: "The data that you are trying to update is not found",
      });
    }
  } catch (err) {
    console.log(err);
    res.json({
      status: "Not Ok",
      error: err,
    });
  }
});

async function authorized(req, res, next) {
  //These are the headers;
  // console.log("These are the headers");
  // console.log(req.headers.jwt == "undefined");
  // console.log(req.headers.jwt);
  if (req.headers.jwt == "undefined") {
    res.status(404).json({
      status: "Not Ok",
      error: "The user needs to login to access the profile",
    });
  } else {
    //Now as the cookie is returned from the user the next step is to check whether the returned cookie is valid or not
    let validcookie = await verifytoken(req.headers.jwt);
    // console.log("The data that is returned after verifying the token is");
    // console.log(validcookie);
    next();
  }
}

module.exports = profile;
