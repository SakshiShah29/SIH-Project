const io = require("socket.io")(3005);

io.on("connection", (socket) => {
  const id = socket.handshake.query.id;
  socket.join(id);

  socket.on("send-message", ({ recipients, text }) => {
    recipients.forEach((recipient) => {
      const newR = recipients.filter((r) => {
        r !== recipient;
      });
      newR.push(id);
      socket.broadcast.to(recipient).emit("receive-message", {
        recipient: newR,
        sender: id,
        text,
      });
    });
  });
});
