const socket = io();
const msgInput = document.getElementById("msg");
const nameInput = document.getElementById("name");
const sendBtn = document.getElementById("send");
const messages = document.getElementById("messages");

sendBtn.onclick = () => {
  const text = msgInput.value.trim();
  const name = nameInput.value.trim() || "名無し";
  if (text) {
    socket.emit("chat message", `${name}: ${text}`);
    msgInput.value = "";
  }
};

socket.on("chat message", (msg) => {
  const li = document.createElement("li");
  li.textContent = msg;
  messages.appendChild(li);
  window.scrollTo(0, document.body.scrollHeight);
});
