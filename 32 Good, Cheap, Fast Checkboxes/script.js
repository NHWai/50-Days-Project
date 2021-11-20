// "use strict";
const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

const doTheTrick = function (clickedOne) {
  console.log(good.checked);
  if (good.checked && cheap.checked && fast.checked) {
    if (good === clickedOne) cheap.checked = false;

    if (cheap === clickedOne) fast.checked = false;

    if (fast === clickedOne) good.checked = false;
  }
};

//For checkbox, use 'change' keyword instead of 'click'
toggles.forEach((toggle) =>
  toggle.addEventListener("change", function (e) {
    doTheTrick(e.target);
  })
);
