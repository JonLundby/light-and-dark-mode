"use strict";

window.addEventListener("load", initApp);

function initApp() {
  //event listener for select on HTML
  document.querySelector("#select-color-mode").addEventListener("change", modeSelected);
}

// modeSelected called when #select-color-mode changes value (the user select color mode)
function modeSelected() {
  const selectedColorMode = this.value;
  console.log(selectedColorMode);

  changeMode(selectedColorMode);
}

function changeMode(mode) {
  console.log("changemode called: " + mode);

  if (mode == "dark") {
    document.querySelector("body").classList.add("dark-mode");
  } else if (mode == "light") {
    document.querySelector("body").classList.remove("dark-mode");
    }
    

}
