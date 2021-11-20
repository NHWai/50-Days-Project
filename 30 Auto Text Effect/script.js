"use strict";

const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = `We love Programming!`;
let speed = 300;
let idx = 1;
console.log(speed);
const writeText = function () {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) idx = 1;

  setTimeout(writeText, speed);
};

writeText();

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
