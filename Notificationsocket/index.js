import {Server} from "socket.io";
const io=new Server({/*options*/});
cors:{
    origin:"http://localhost:3000"
}
io.on("connection",(socket)=>{
    console.log("someone has connected")

    socket.on("")
});

io.listen(5006);