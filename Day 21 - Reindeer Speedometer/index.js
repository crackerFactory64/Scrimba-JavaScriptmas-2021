const speedometer = document.getElementById("speedometer");
const select = document.getElementById("select");
const time = document.getElementById("time");
let currentLocation = "";
let timeTaken = 0;

let destination = [
  {
    name: "Munich",
    distanceFromPrevDestination: 2892,
  },
  {
    name: "Kiev",
    distanceFromPrevDestination: 1111,
  },
  {
    name: "Ulaanbaatar",
    distanceFromPrevDestination: 5324,
  },
  {
    name: "Sydney",
    distanceFromPrevDestination: 5458,
  },
  {
    name: "Tijuana",
    distanceFromPrevDestination: 6531,
  },
  {
    name: "Chicago",
    distanceFromPrevDestination: 1729,
  },
];

function calculateSpeed() {
  if (time.value > 0 && select.value != "North Pole") {
    timeTaken = time.value;
    let speed = 0;
    let distance = 0;
    currentLocation = select.value;
    destination.forEach((stop) => {
      if (stop.name == currentLocation) {
        distance = stop.distanceFromPrevDestination;
      }
    });
    speed = Math.floor(distance / timeTaken);
    speedometer.innerHTML = `Average speed:<br><span class="speedo">${speed}</span> km/s`;
    // Task:
    // - Retrieve distance from previous destination from array of objects.
    // - Calculate speed and round speed to an integer (whole number).
    // - Display speed in speedometer paragraph.
  }
}
select.addEventListener("change", calculateSpeed);
time.addEventListener("change", calculateSpeed);

// Stretch goals:
// - Calculate average overall speed.
// - Display location as North Pole on pageload.
