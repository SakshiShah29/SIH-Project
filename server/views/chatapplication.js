//So this is the chat application

let express = require("express");
let cors = require("cors");
let chattrouter = express();
chattrouter.use(cors());
chattrouter.use(express.json());
var http = require("http").Server(chattrouter);
var io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log("The user is connected");
});

//This is the router which handles post request
//In the post request we pass in three things
//1)The profile id of the sender of the message
//2)The profile id of the receiver of the message
//3)Is the msg

//All of this data will be stored in an array in the database

module.exports = chattrouter;
