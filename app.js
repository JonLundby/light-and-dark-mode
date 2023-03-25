"use strict";

window.addEventListener("load", initApp);

function initApp() {
  //event listener for select on HTML
  document.querySelector("#select-color-mode").addEventListener("change", modeSelected);
  detectColorMode();
  quiz();
}

function quiz() {
  const answer = prompt("what is the original name of javascript?");
  if (answer == "ECMAScript") {
    alert("yes, that is correct")
  } else {
    alert("wrong... it is ECMAScript!")
  }
}

// modeSelected called when #select-color-mode changes value (the user select color mode)
function modeSelected() {
  const selectedColorMode = this.value;
  console.log(selectedColorMode);

  changeMode(selectedColorMode);
  saveUserColorMode(selectedColorMode);
}

function changeMode(mode) {
  console.log("changemode called: " + mode);
  const bod = document.querySelector("body");

  if (mode === "light") {
    resetColorMode();
    bod.classList.add("body");
  } else if (mode === "dark") {
    resetColorMode();
    bod.classList.add("dark-mode");
  } else if (mode === "green") {
    resetColorMode();
    bod.classList.add("green-mode");
  } else if (mode === "yellow") {
    resetColorMode();
    bod.classList.add("yellow-mode");
  }
}

function resetColorMode() {
  console.log("color reset...");
  document.querySelector("body").classList.remove("dark-mode", "green-mode", "yellow-mode");
}

function saveUserColorMode(mode) {
  localStorage.setItem("savedTheme", mode);
}

function readColorMode() {
  const savedTheme = localStorage.getItem("savedTheme");
  console.log("reading..." + savedTheme);
  return savedTheme;
}

function detectColorMode() {
  const modeFromLocalStorage = readColorMode();
  console.log("detecting... " + modeFromLocalStorage);

  if (modeFromLocalStorage) {
    document.querySelector("#select-color-mode").value = modeFromLocalStorage;
    changeMode(modeFromLocalStorage);
  }
}
