"use strict";
const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickedTimes = 0;
const heartMe = function (e) {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x1 = e.clientX;
  const y1 = e.clientY;

  const x2 = e.target.offsetLeft;
  const y2 = e.target.offsetTop;

  const x = x1 - x2;
  const y = y1 - y2;

  heart.style.top = `${y}px`;
  heart.style.left = `${x}px`;

  loveMe.appendChild(heart);
  times.innerText = ++clickedTimes;

  setTimeout(() => heart.remove(), 1000);
};

loveMe.addEventListener("dblclick", heartMe);
