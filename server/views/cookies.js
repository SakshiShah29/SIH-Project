//This is the route where we are gonna check the frontend actually has the cookies or not

const express = require("express");
const cookieParser = require("cookie-parser");
const cookierouter = express();

const cors = require("cors");

cookierouter.use(express.json());
cookierouter.use(cookieParser());
cookierouter.use(cors());

cookierouter.get("/", async (req, res) => {
  console.log("This is the cookie route");
  //   console.log(req.cookies);
  res.json({
    value: true,
  });
});

module.exports = cookierouter;
