// Creating snowContainer constant including a new div element
// and assign an ID to it.
// The snowContainer represents div element in with snowflakes will be generated.
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


// For each snowflake generates random size, falling duration and initial position
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


// Creating snow function
const createSnow = (num) => {

    // Each snow run has own div created (snowContainer
    document.getElementById("snowMain").appendChild(snowContainer);

    // Iterating creation of each individual snowflake
    for (let i = num; i > 0; i--) {

        // Each snowflake is individual div element
        let snow = document.createElement("div");

        // Defining class for snowflake
        snow.className = "snow";

        // Assigning initial random style settings from getRandomStyles function to snow element
        snow.style.cssText = getRandomStyles();

        // Selecting one of snowflake styles
        snow.innerHTML = snowContent[random(3)];

        // Inserting individual snowflake to snowContainer
        snowContainer.append(snow);

        // Set visibility of snowflake
        snowContainer.style.opacity = "1";
    }
}


// Function that change snowContainer visibility and then remove whole div element after predefined timeout.
const removeSnow = () => {
    snowContainer.style.opacity = "0";
    setTimeout(() => {
        snowContainer.remove()
    }, 500)
}


// Function that creates or remove snow based on radio button selection
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


// When HTML DOM is completely loaded...
document.addEventListener("DOMContentLoaded", () => {

    // ...for the first time, create a snow.
    createSnow(30);

    // Timeout to remove the snow after defined time period
    setTimeout(removeSnow, 1000 * 60);

    // Listening for changes in radio buttons calls function myFunction
    themeRadio.addEventListener("change", myFunction);
});