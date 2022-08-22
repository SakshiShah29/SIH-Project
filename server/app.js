const express = require("express");

//here we are importing two more libraries which are the morgan and helmet

const morgan = require("morgan");
const helmet = require("helmet");

const bodyParser = require("body-parser");

//These are all the files that act as route handlers
const googleloginrouter = require("./views/googlelogin");
const loginRouter = require("./views/login");
const { signup } = require("./views/signup");
const profilerouter = require("./views/profilepage");
const adminrouter = require("./views/adminlogin");
const uploadrouter = require("./views/projectupload");
const cookierouter = require("./views/cookies");
const pendingrouter = require("./views/pendingproject");
const detectorrouter = require("./views/plagiarismdetection");
const chatrouter = require("./views/ChatRoute");
const messagerouter = require("./views/MessageRoute");
const getrouter = require("./views/getrouter");
const chatrouter2 = require("./views/chatapplication");
// import ChatRoute from "./routes/ChatRoute.js";
// import MessageRoute from "./routes/MessageRoute.js";

//This is the npm package which makes it easy to import files with a .csv extension
const csv = require("csv");
var axios = require("axios").default;

//This basically means cross origin resource sharing which is a concept which makes it possible for the backend to share the resources
//with the frontend
const cors = require("cors");
const app = express();

//This basically means that at these urls we are using the respective views
//Hence again we are using the concept of middleware functions
app.use("/api/student", signup);
app.use("/api/v1/auth/google", googleloginrouter);
app.use("/api/student", loginRouter);
app.use("/api/student/profile", profilerouter);
app.use("/api/admin", adminrouter);
app.use("/api/student/projectupload", uploadrouter);
app.use("/api/cookies", cookierouter);
app.use("/api/pendingproject", pendingrouter);
app.use("/api/plagiarism", detectorrouter);
app.use("/chat", chatrouter);
app.use("/message", messagerouter);
app.use("/api/student/getdetails", getrouter);
app.use("/api/student/chat", chatrouter2);

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
);

app.use(function (req, res, next) {
  res.header("Content-Type", "application/json;charset=UTF-8");
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
var colleges;

//This is the npm package which makes it possible for us to import different files into the system
const fs = require("fs");
// const { checkServerIdentity } = require("tls");

fs.readFile("./database.csv", (err, data) => {
  csv.parse(data, function (err, data) {
    colleges = data;
    // console.log(colleges);
  });
});
var options = {
  method: "GET",
  url: "https://university-college-list-and-rankings.p.rapidapi.com/api/test",
  headers: {
    "x-rapidapi-host": "university-college-list-and-rankings.p.rapidapi.com",
    "x-rapidapi-key": "bc6caecafemsh2a57363dd75a054p11cb44jsned389662efb0",
  },
};

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/clg", (req, res) => {
  res.json(colleges);
});

module.exports = app;
