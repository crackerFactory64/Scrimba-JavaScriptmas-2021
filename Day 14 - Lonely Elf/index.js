const elf = document.getElementById("elf");
const btn = document.getElementById("btn");
const elfPen = document.getElementById("elf-pen");
const elfGauge = document.getElementById("elf-gauge");
const error = document.getElementById("error");

let elfCount = 1;

function duplicateElf() {
  if (elfCount < 100) {
    const newElf = document.createElement("div");
    newElf.classList.add("elf");
    newElf.innerHTML = boyOrGirl();
    elfPen.appendChild(newElf);
    elfCount++;
    elfGauge.style.height = `${elfCount}%`;
  } else {
    error.style.visibility = "visible";
  }

  // rounds out the top border radiuses of the inner gauge div
  if (elfCount == 100) {
    elfGauge.classList.add("full");
  }

  // Task:
  // - Write a function to duplicate the elf when the button is clicked.
  // - See index.css for optional styling challenges.
}

function boyOrGirl() {
  const decider = Math.floor(Math.random() * 2) + 1;
  return decider == 1 ? "🧝‍♀️" : "🧝‍♂️";
}

btn.addEventListener("click", duplicateElf);

// Stretch goals:
// - Write a function to give the elves some tools, or a cup of tea!
// - Limit the total number of elves to 100.
