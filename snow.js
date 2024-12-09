// Creating snowContainer constant including a new div element
// and assign an ID to it.
// The snowContainer represents each snowflake that will be generated.
const snowContainer = document.createElement("div")
snowContainer.id = "snow-container";

// snowContent is an array of different snowflake styles.
const snowContent = ["&#10052", "&#10053", "&#10054"];


// Defining block of radio buttons to react on changes.
const themeRadio = document.getElementById("theme-radio");

// Defining each radio selection to know which one is selected.
const snowEnabled = document.getElementById("color-scheme-snow");
const snowDisabledLight = document.getElementById("color-scheme-light");
const snowDisabledDark = document.getElementById("color-scheme-dark");

// Random number generator
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
}

function myFunction() {
    if (snowEnabled.checked) {
        createSnow(30);
    } else if (snowDisabledDark.checked) {
        removeSnow();
    } else if (snowDisabledLight.checked) {
        removeSnow();
    } else {
        removeSnow();
    }
}


const removeSnow = () => {
    snowContainer.style.opacity = "0";
    setTimeout(() => {
        snowContainer.remove()
    }, 500)
}

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("load", () => {
        createSnow(30);
        setTimeout(removeSnow, 1000 * 60);
    });

    themeRadio.addEventListener("change", myFunction);
});