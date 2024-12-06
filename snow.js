let snowContainer = document.createElement("div")
snowContainer.id = "snow-container";

const snowContent = ["&#10052", "&#10053", "&#10054"];

const field = document.getElementById("checkbox");
const snowEnable = document.getElementById("color-scheme-auto");
const snowDisabledLight = document.getElementById("color-scheme-light");
const snowDisabledDark = document.getElementById("color-scheme-dark");

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
  document.getElementById("snowMain").appendChild(snowContainer);
  for (let i = num; i > 0; i--) {
    let snow = document.createElement("div");
    snow.className = "snow";
    snow.style.cssText = getRandomStyles();
    snow.innerHTML = snowContent[random(3)];
    snowContainer.append(snow);
    snowContainer.style.opacity = "1";
  }
};

const removeSnow = () => {
  snowContainer.style.opacity = "0";
  setTimeout(() => {
    snowContainer.remove()
  }, 500)
}

window.addEventListener("load", () => {
  createSnow(30);
  setTimeout(removeSnow, 1000 * 60);
});

field.addEventListener("change", myFunction);

function myFunction() {
  if (snowEnable.checked) {
    createSnow(30);
  } else if (snowDisabledDark.checked) {
    removeSnow();
  } else if (snowDisabledLight.checked) {
    removeSnow();
  } else {
    removeSnow();
  }
}
