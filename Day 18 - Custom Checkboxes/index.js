const items = ["Candles", "Decorations", "Chocolate"];
const checklist = document.getElementById("checklist");

for (let i = 0; i < items.length; i++) {
  checklist.innerHTML += `
         <div class="checklist-item">
                <input type="checkbox" id="${items[i]}" value="${items[i]}" class="checkbox">
                <label for="${items[i]}" class="strikethrough">
                    <span class="custom-checkbox custom-checkbox--${items[i]}">${items[i]}</span>
                </label>
            </div>
    `;
}