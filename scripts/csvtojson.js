//This is the fs module which is used to import the csv files into our script
const fs = require("fs");
const csv = require("csvtojson");
let json;

const csvFilePath = "./database_final.csv";
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    json = jsonObj;
    console.log(jsonObj);
  })
  .catch((err) => {
    console.log(err);
  });
