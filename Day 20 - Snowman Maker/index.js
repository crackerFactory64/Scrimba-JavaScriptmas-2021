const inputs = document.querySelectorAll(".controls input");

const eyes = document.querySelectorAll(".eye");
const nose = document.getElementById("nose");
const buttons = document.querySelectorAll(".button");
const hat = document.getElementById("hat");
const brim = document.getElementById("brim");

function changeColor(input) {
  if (input.id == "color") {
    eyes.forEach((eye) => {
      eye.style.backgroundColor = input.value;
    });
  } else if (input.id == "color2") {
    nose.style.borderLeftColor = input.value;
  } else if (input.id == "color3") {
    buttons.forEach((button) => {
      button.style.backgroundColor = input.value;
    });
  } else if (input.id == "color4") {
    hat.style.backgroundColor = input.value;
    brim.style.backgroundColor = input.value;
  }
}

inputs.forEach((input) => {
  input.addEventListener("change", () => {
    changeColor(input);
  });
});

// Task:
// Write a function to update the snowman colors according to the colors selected from the pickers.

// Stretch goals:
// - Add other items eg scarf, arms, etc.
// - Add different options for nose shape, or hats.
// - Check for contrast between pupils and eye color.
