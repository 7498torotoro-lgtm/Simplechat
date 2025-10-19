const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public")); // publicを静的配信

io.on("connection", (socket) => {
  console.log("🟢 User connected");

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg); // 全員に送信
  });

  socket.on("disconnect", () => {
    console.log("🔴 User disconnected");
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
