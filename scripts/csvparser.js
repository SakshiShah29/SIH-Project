//csv-parser can convert CSV into JSON at at rate of around 90,000 rows per second.
const csvparser = require("csv-parser");

const fs = require("fs");

const final = [];

const University = require("../models/universityschema");

//So why we are using a read stream
//This is because as we are reading chunks of data

async function insert() {
  //The function fs. createReadStream() allows you to open up a readable stream in a very simple manner. All you have to do is pass the path of the file to start streaming in.
  // It turns out that the response (as well as the request) objects are streams.

  new Promise((resolve, reject) => {
    fs.createReadStream("./scripts/database_final.csv")
      .pipe(csvparser({}))
      .on("data", (data) => final.push(data))
      .on("end", () => {
        console.log(final);
        console.log(typeof final);
        resolve(true);
      });
  })
    .then((data) => {
      University.insertMany(final, (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log("The data has been inserted");
          console.log(data);
        }
      });

      console.log(final);
      console.log(typeof final);
    })
    .catch((error) => {
      console.log("There is some error in the input read stream");
      console.log(error);
    });
}

// insert();

module.exports = insert;
