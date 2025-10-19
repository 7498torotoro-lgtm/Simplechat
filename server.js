const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("🟢 User connected");

  socket.on("chat message", (data) => {
    io.emit("chat message", data); // 全員に送信
  });

  socket.on("disconnect", () => {
    console.log("🔴 User disconnected");
  });
});

server.listen(3000, () => {
  console.log("✅ Chat server running at http://localhost:3000");
});
