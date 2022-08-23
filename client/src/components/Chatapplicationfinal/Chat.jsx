// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";

// const socket = io("http://localhost:3002");

// export default function Chat() {
//   const [isConnected, setIsConnected] = useState(socket.connected);
//   const [messages, setmessages] = useState([]);
//   const [message, setmessage] = useState([]);
//   const [m, setm] = useState("");
//   useEffect(() => {
//     socket.on("connect", () => {
//       setIsConnected(true);
//     });

//     socket.on("receive_messages", (msg) => {
//       setmessages(msg);
//     });

//     socket.on("disconnect", () => {
//       setIsConnected(false);
//     });

//     return () => {
//       socket.off("connect");
//       socket.off("disconnect");
//       socket.off("pong");
//     };
//   }, []);

//   function sendmessage() {
//     socket.emit("chat message", { message: m });
//     socket.once("received message", (msg) => {
//       console.log("This is the socket function being ran");
//       setmessage((prev) => {
//         return [...prev, msg];
//       });
//     });
//   }

//   function Messages() {
//     return (
//       <div>
//         <h1 style={{ color: "black" }}>These are the messages</h1>
//         {message.map((ele) => {
//           return <p style={{ color: "black" }}>{ele.message}</p>;
//         })}
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1 style={{ color: "black" }}>Hello this is the chat component</h1>
//       <p style={{ color: "black" }}>{messages}</p>
//       <label>Enter the message</label>
//       <input
//         type="text"
//         onChange={(e) => {
//           setm(e.target.value);
//         }}
//       />
//       <button onClick={sendmessage}>Send message</button>
//       {console.log(message)}
//       <Messages />
//     </div>
//   );
// }
