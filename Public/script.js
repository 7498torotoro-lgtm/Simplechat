const socket = io();
const msgInput = document.getElementById("msg");
const nameInput = document.getElementById("name");
const sendBtn = document.getElementById("send");
const messages = document.getElementById("messages");

// メッセージ送信
sendBtn.onclick = () => {
  const text = msgInput.value.trim();
  const name = nameInput.value.trim() || "名無し";
  if (text) {
    socket.emit("chat message", `${name}: ${text}`);
    msgInput.value = "";
  }
};

// リアルタイム受信
socket.on("chat message", (msg) => {
  const li = document.createElement("li");
  li.textContent = msg;
  messages.appendChild(li);
  messages.scrollTop = messages.scrollHeight; // 下までスクロール
});
