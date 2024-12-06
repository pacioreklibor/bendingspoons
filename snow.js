const snowContainer = document.getElementById("snow-container");
const snowContent = ["&#10052", "&#10053", "&#10054"];

var field = document.getElementById("checkbox");
var snowEnable = document.getElementById("color-scheme-auto");
var snowDisabledLight = document.getElementById("color-scheme-light");
var snowDisabledDark = document.getElementById("color-scheme-dark");

const random = (num) => {
  return Math.floor(Math.random() * num);
};

const getRandomStyles = () => {
  const top = random(100);
  const left = random(100);
  const dur = random(10) + 10;
  const size = random(25) + 25;
  return `
    top: -${top}%;
    left: ${left}%;
    font-size: ${size}px;
    animation-duration: ${dur}s;
  `;
};

const createSnow = (num) => {
  for (var i = num; i > 0; i--) {
    var snow = document.createElement("div");
    snow.className = "snow";
    snow.style.cssText = getRandomStyles();
    snow.innerHTML = snowContent[random(3)];
    snowContainer.append(snow);
  }
};

const removeSnow = () => {
  snowContainer.style.opacity = "0";
};

const enableSnow = () => {
  snowContainer.style.opacity = "1";
};

window.addEventListener("load", () => {
  createSnow(30);
  setTimeout(removeSnow, 1000 * 60);
});

/*indow.addEventListener("click", () => {
  removeSnow();
});*/

field.addEventListener("change", myFunction);

function myFunction() {
  if (snowEnable.checked) {
    console.log("snowEnabled ckecked");
    enableSnow(30);
  } else if (snowDisabledDark.checked) {
    console.log("snowDisabledDark checked");
    removeSnow();
  } else if (snowDisabledLight.checked) {
    console.log("snowDisabledLight checked");
    removeSnow();
  } else {
    console.log("Nothing is checked");
    removeSnow();
  }
}
