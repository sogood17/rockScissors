import "./styles.css";

const btns = document.querySelectorAll("button");
const message = document.querySelector(".message");

const gameMessage = (m) => {
  switch (m) {
    case 가위:
    case 바위:
    case 보:
      console.log("win");
      break;
  }
};

const handler = (e) => {
  gameMessage(e.innerText);
};

const select = btns.forEach((e) => {
  e.addEventListener("click", () => handler(e));
});
