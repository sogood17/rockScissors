import "./styles.css";

const btns = document.querySelectorAll("button");
const message = document.querySelector(".message");
const userMessage = document.querySelector(".user");
const computerMessage = document.querySelector(".computer");

const gameMessage = (user) => {
  const computer = btns[Math.floor(Math.random() * 3)].innerText;
  switch (user + computer) {
    case "가위보":
    case "바위가위":
    case "보바위":
      userMessage.innerText = `Your choice = ${user}`;
      computerMessage.innerText = `Computer's choice = ${computer}`;
      message.innerText = "You win!";
      break;
    case "보가위":
    case "가위바위":
    case "바위보":
      userMessage.innerText = `Your choice = ${user}`;
      computerMessage.innerText = `Computer's choice = ${computer}`;
      message.innerText = "Computer win!";
      break;
    case "보보":
    case "가위가위":
    case "바위바위":
      userMessage.innerText = `Your choice = ${user}`;
      computerMessage.innerText = `Computer's choice = ${computer}`;
      message.innerText = "Draw!";
      break;
  }
};

const handler = (e) => {
  gameMessage(e.innerText);
};

const select = btns.forEach((e) => {
  e.addEventListener("click", () => handler(e));
});
