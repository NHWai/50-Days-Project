// "use strict";

const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");
const progress = document.getElementById("progress");

let currentactive = 1;

next.addEventListener("click", function () {
  currentactive++;

  if (currentactive > circles.length) {
    currentactive = circles.length;
  }

  upDate();
});

prev.addEventListener("click", function () {
  currentactive--;

  if (currentactive < 1) {
    currentactive = 1;
  }

  upDate();
});

function upDate() {
  circles.forEach((circle, index) => {
    if (index < currentactive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  console.log(actives.length);

  console.log(((actives.length - 1) / (circles.length - 1)) * 100);

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentactive === 1) {
    prev.disabled = true;
  } else if (currentactive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
