const btn = document.getElementById("btn");
const food = document.getElementById("food");
const guestsEl = document.getElementById("guests");
const veggieEl = document.getElementById("vegetarian-input");
const error = document.getElementById("error");

function calculateDinner() {
  const guests = guestsEl.value.trim();
  const veggie = veggieEl.checked;

  if (guests <= 0) {
    error.classList.add("error--show");
  } else {
    error.classList.remove("error--show");

    veggie == true
      ? (food.innerHTML = "nut roast!")
      : guests <= 4
      ? (food.innerHTML = "turkey!")
      : (food.innerHTML = "goose!");
  }
}

btn.addEventListener("click", calculateDinner);

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.
