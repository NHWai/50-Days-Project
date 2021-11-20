"use strict";

const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const symbolEl = document.getElementById("symbols");
const numberEl = document.getElementById("numbers");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const scale = function (max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomLower = function () {
  // Lowercase -> 97 to 122
  return String.fromCharCode(scale(122, 97));
};

const getRandomUpper = function () {
  // Uppercase -> 65 to 90
  return String.fromCharCode(scale(90, 65));
};

const getRandomNumber = function () {
  // Number -> 48 to 57
  return String.fromCharCode(scale(57, 48));
};

const getRandomSymbol = function () {
  const symbols = `!@#$%^&*(){}[]=<>/,.`;
  return symbols[Math.floor(Math.random() * 20)];
};

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
// console.log(getRandomLower());
// console.log(randomFunc[lower]());

const generatePassword = function (lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (type) => Object.values(type)[0]
  );

  if (typesCount === 0) return "";

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
};

generateEl.addEventListener("click", function () {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasSymbol = symbolEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

clipboardEl.addEventListener("click", function () {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) return;

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
});
