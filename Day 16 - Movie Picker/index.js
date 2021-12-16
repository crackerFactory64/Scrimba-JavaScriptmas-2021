const ageSelector = document.getElementById("age-selector");
const genreSelector = document.getElementById("genre-selector");
const vintageSelector = document.getElementById("vintage-selector");

const selectorsArr = [ageSelector, genreSelector, vintageSelector];

const btn = document.getElementById("btn");
const suggestedMovie = document.getElementById("suggested-movie");

const moviesArr = [
  {
    name: "Die Hard",
    age: "18+",
    genre: "Action",
    vintage: "Classic",
  },
  {
    name: "Kiss Kiss Bang Bang",
    age: "18+",
    genre: "Action",
    vintage: "Modern",
  },

  {
    name: "Love Actually",
    age: "18+",
    genre: "Romance",
    vintage: "Modern",
  },

  {
    name: "The Apartment",
    age: "PG",
    genre: "Romance",
    vintage: "Classic",
  },
  {
    name: "The Polar Express",
    age: "PG",
    genre: "Action",
    vintage: "Modern",
  },
  {
    name: "Shrek",
    age: "PG",
    genre: "Comedy",
    vintage: "Modern",
  },
  {
    name: "Brazil",
    age: "18+",
    genre: "Comedy",
    vintage: "Classic",
  },
];

function pickMovie() {
  const age = ageSelector.value;
  const genre = genreSelector.value;
  const vintage = vintageSelector.value;

  let output = "Sorry no movies match those terms. <br><br> Please try again.";

  moviesArr.forEach((movie) => {
    if (
      age === movie.age &&
      genre === movie.genre &&
      vintage === movie.vintage
    ) {
      output = movie.name;
    }
  });

  suggestedMovie.innerHTML = output;
}

btn.addEventListener("click", pickMovie);

selectorsArr.forEach((selector) => {
  selector.addEventListener("change", pickMovie);
});

// Task:
// - Write a function to select a suitable movie based on the age group and genre provided.
//  - Display it in the suggested-movie paragraph when the button is clicked.

// Stretch goals:
// - Have the function run on each change of the <select> tags.
// - Add more movies/complexity - for example black and white vs color, preferred actors, etc.
