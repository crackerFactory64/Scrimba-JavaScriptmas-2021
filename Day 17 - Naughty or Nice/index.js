const niceList = document.getElementById("nice-list");
const naughtyList = document.getElementById("naughty-list");

const newName = document.getElementById("new-person");
const beenGood = document.getElementById("been-good");
const addNewBtn = document.getElementById("add-new");

const sorteesArr = [
  {
    name: "David",
    hasBeenGood: false,
  },
  {
    name: "Del",
    hasBeenGood: true,
  },
  {
    name: "Valerie",
    hasBeenGood: false,
  },
  {
    name: "Astrid",
    hasBeenGood: true,
  },
];

sort();

function sort() {
  niceList.innerHTML = "";
  naughtyList.innerHTML = "";

  const niceArr = sorteesArr.filter((sortee) => sortee.hasBeenGood == true);
  const naughtyArr = sorteesArr.filter((sortee) => sortee.hasBeenGood == false);

  niceArr.forEach((person) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.innerHTML = `
        <p>${person.name}</p> 
        <button
        class="switch-button"
        onclick="switchLists(this)"
        data-name="${person.name}"
        >
        <i class="fas fa-arrow-right"></i>
      </button>
    `;
    niceList.append(listItem);
  });

  naughtyArr.forEach((person) => {
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.classList.add("list-item--right");
    listItem.innerHTML = `
       
        <button
        class="switch-button"
        onclick="switchLists(this)"
        data-name="${person.name}"
        >
        <i class="fas fa-arrow-left"></i>
      </button>
       <p>${person.name}</p> 
    `;
    naughtyList.append(listItem);
  });
}

function switchLists(person) {
  const name = person.getAttribute("data-name");
  sorteesArr.forEach((sortee) => {
    if (sortee.name == name) {
      sortee.hasBeenGood = !sortee.hasBeenGood;
    }
    sort();
  });
}

function addNew() {
  const newPerson = {};
  if (newName.value != "") {
    newPerson.name = newName.value.trim();
    newPerson.hasBeenGood = beenGood.checked;
    sorteesArr.push(newPerson);
    sort();
    newName.value = "";
  } else {
    alert("New names cannot be blank.");
  }
}

addNewBtn.addEventListener("click", addNew);
// Task:
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.

// Stretch goals:
// - Add the option to add new names to the sorteesArr.
// - Make it possible to switch people to the other list.
