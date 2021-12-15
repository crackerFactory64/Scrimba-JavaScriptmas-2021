const languageSelector = document.getElementById("language-selector");
const greetingDisplay = document.getElementById("greeting-text");
const newYearsToggle = document.getElementById("new-year");

const greetingsArr = [
  {
    language: "English",
    greeting: "Merry Christmas",
    additional: "and a Happy New Year",
  },
  {
    language: "Spanish",
    greeting: "Feliz Navidad",
    additional: "y un Feliz Año Nuevo",
  },
  {
    language: "Ukrainian",
    greeting: "щасливого Різдва",
    additional: "i щасливого нового року",
  },
  {
    language: "Welsh",
    greeting: "Nadolig Llawen",
    additional: "a Blwyddyn Newydd Dda",
  },
  {
    language: "German",
    greeting: "Frohe Weihnachten",
    additional: "und ein Glückliches Neues Jahr",
  },
  {
    language: "Japanese",
    greeting: "Merīkurisumasu",
    additional: "to akemashite omedetō gozaimasu",
  },
];

function translate() {
  // Task:
  // - Write a function to display the correct greeting when a language is selected.
  greetingsArr.forEach((greeting) => {
    if (languageSelector.value == greeting.language) {
      if (newYearsToggle.checked == false) {
        greetingDisplay.innerHTML = `${greeting.greeting}!`;
      } else {
        greetingDisplay.innerHTML = `${greeting.greeting} ${greeting.additional}!`;
      }
      greetingDisplay.classList.add("animate");
    }
  });

  //removes animate class so it can be added again on next change causing the animation to play
  setTimeout(() => greetingDisplay.classList.remove("animate"), 500);
}

languageSelector.addEventListener("change", translate);

newYearsToggle.addEventListener("change", translate);

// Stretch goals:
// - Animate the message switch.
// - Add the option to switch the greeting, for example also have "And a Happy New Year!".
