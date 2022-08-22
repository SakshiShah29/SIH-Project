var app = require("express")();
var http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});
const cors = require("cors");

app.use(cors());

// app.get("/", function (req, res) {
//   res.sendfile("index.html");
// });

let socketids = [];
io.on("connection", function (socket) {
  console.log("user connected", socket.id);
  socketids.push(socket.id);
  socket.emit("receive_messages", ["This is the first message"]);
  socket.on("chat message", function (msg) {
    //This is we are printing the socket ids
    console.log("The socket ids of the two clients are:", socketids);
    console.log("This is the message", msg);
    // io.emit("received message", msg);
    // socket.broadcast.to(socketids[0]).emit("received message", msg);
    // socket.broadcast.to(socketids[1]).emit("received message", msg);
    io.to(socketids[0]).emit("received message", msg);
    console.log("Sent to id 0");
    io.to(socketids[1]).emit("received message", msg);
    console.log("sent to id 1");
    // io.sockets.send("received message", msg);
  });
  socket.on("disconnect", function () {
    console.log("user disconnected");
    socketids.pop();
  });
});

http.listen(3002, function () {
  console.log("Server is running on port 3002");
});
