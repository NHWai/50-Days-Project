"use strict";
const nums = document.querySelectorAll(".nums span");
const final = document.querySelector(".final");
const replay = document.getElementById("replay");
const counter = document.querySelector(".counter");

// startCount();

const startCount = function () {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1;

    num.addEventListener("animationend", function (e) {
      if (e.animationName === "goIn" && idx !== nextToLast) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        final.classList.add("show");
      }
    });
  });
};

const restart = function () {
  final.classList.remove("show");
  counter.classList.remove("hide");

  nums.forEach((num) => {
    num.classList.value = "";
  });

  nums[0].classList.add("in");
};

startCount();

replay.addEventListener("click", restart);
