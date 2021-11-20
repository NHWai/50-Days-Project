"use strict";
const toasts = document.getElementById("toasts");
const btn = document.getElementById("button");

const messages = [
  " message 1",
  "message 2",
  " message 3",
  " message 4",
  "  message 5",
];

// const messageFun = function () {
//   for (let i = 0; i <= 100; i++) {
//     const d = `message[${i + 1}]`;
//     return d;
//   }
// };
// console.log(messageFun());

const getNoti = function () {
  const toastEl = document.createElement("div");
  toastEl.classList.add("toast");
  toastEl.innerText = `${
    messages[Math.floor(Math.random() * messages.length)]
  }`;

  toasts.appendChild(toastEl);
  setTimeout(() => toastEl.remove(), 3000);
};

btn.addEventListener("click", getNoti);
