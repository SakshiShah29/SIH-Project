const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const detectorrouter = new express.Router();
const Projectupload = require("../models/projectuploadschema");
const fs = require("fs");

//We also need our node application to interact with the python script
//For that we are using the spawn

const { spawn } = require("child_process");
const { dir } = require("console");
const { title } = require("process");

detectorrouter.use(cors());
detectorrouter.use(bodyparser.json());
detectorrouter.use(express.json());

detectorrouter.post("/check", async (req, res) => {
  let { data, path1, path2 } = req.body;
  let datareceived = data;

  const childPython = spawn("python", [
    `${__dirname}/plagiarismdetectiontitle.py`,
    path1,
  ]);

  const childPython2 = spawn("python", [
    `${__dirname}/plagiarismdetectionabstract2.py`,
    path1,
  ]);

  //Now the first step is to find all the projects that were uploaded before this project id
  Projectupload.find({}, (err, data) => {
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

      //Here we are removing the directories
      try {
        fs.rmSync(path1, { recursive: true, force: true });
        fs.rmSync(path2, { recursive: true, force: true });
      } catch (err) {
        console.log("There is some error while deleting the folders");
        console.log(err);
      }

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

      try {
        fs.writeFileSync(`${path1}/0.txt`, datareceived.title);
        fs.writeFileSync(`${path2}/0.txt`, datareceived.abstract);
      } catch (error) {
        console.log(error);
      }

      for (let i = 0; i < data2.length; i++) {
        try {
          fs.writeFileSync(`${path1}/${i + 1}.txt`, data2[i].title);
          fs.writeFileSync(`${path2}/${i + 1}.txt`, data2[i].abstract);
        } catch (error) {
          console.log(error);
        }
      }

      let titleplagiarism;
      childPython.stdout.on("data", (data) => {
        console.log(
          "This is the output after checking inputs",
          data.toString()
        );

        let arr = data.toString().split("");
        if (arr[0] == "0") {
          titleplagiarism = false;
        } else {
          titleplagiarism = true;
        }
      });

      childPython.stderr.on("data", (data) => {
        console.log("Some error occurred", data.toString());
      });

      childPython.on("close", (code) => {
        console.log("The child process exited with code", code);
      });

      // let abstractplagiarism;
      //This means that the plagiarism has not been found in the titles
      //The next step is to check the plagiarism in the abstracts of the project
      childPython2.stdout.on("data", (data) => {
        console.log("This is output after checking abstracts", data.toString());
        let arr = data.toString().split("");
        if (arr[0] == "0") {
          // abstractplagiarism = false;
          console.log(titleplagiarism);
          // console.log(abstractplagiarism);
          if (titleplagiarism == false) {
            res.status(200).json({
              msg: "The plagiarism is not detected",
            });
          } else {
            res.json({
              msg: "The plagiarism is detected",
            });
          }
        } else {
          // abstractplagiarism = true;
          console.log(titleplagiarism);
          console.log("This is part 2");
          // console.log(abstractplagiarism);
          res.json({
            msg: "The plagiarism is detected",
          });
        }
      });

      childPython2.stderr.on("data", (data) => {
        console.log("Some error occurred", data.toString());
      });

      childPython2.on("close", (code) => {
        console.log("The child process exited with code", code);
      });

      //   try {
      //     fs.writeFileSync(`${path1}/check.txt`, datareceived.title);
      //     fs.writeFileSync(`${path2}/check.txt`, datareceived.abstract);
      //   } catch (error) {
      //     console.log(error);
      //   }
    }
  });
});

module.exports = detectorrouter;
