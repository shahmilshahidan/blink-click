function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function startButton() {
	const x = document.getElementById("startBtn");
	x.addEventListener("click", createTable, { once: true });
}

function createTable() {
	const table = document.createElement("table");
	table.id = "myTable";

	const tbody = document.createElement("tbody");
	tbody.id = "tableBody";
	
	for (let i = 0; i < 3; i++){
		const row = document.createElement("tr");
		row.id = `row-${i}`;

		for (let j = 0; j < 3; j++){
			const cell = document.createElement("td");
			cell.id = `cell-${i}-${j}`;
			cell.textContent = `${i},${j}`;
			row.appendChild(cell);
		}

		tbody.appendChild(row);
	}

	table.appendChild(tbody);
	document.getElementById("tableContainer").appendChild(table);
	table.setAttribute("border", "2");

}

// ✅ create and append circle into a cell
function createCircle(cell) {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  cell.innerHTML = ""; // optional: clear existing text
  cell.appendChild(circle);
}

// Example: add circle to specific cell
function flashCircle() {
  const table = document.getElementById("myTable");
  if (!table) return;

  // pick random row & col
  const row = random(2); // since 3 rows
  const col = random(2); // since 3 cols
  const cell = table.rows[row].cells[col];

  createCircle(cell);
  setTimeout(() => {
  	cell.innerHTML = `${row},${col}`;
  }, 3000);
}

function startFlashing() {
	setInterval(flashCircle, 3000);
}

function drawRect() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    const rectangle = new Path2D();
    rectangle.rect(10,10,50,50);
    ctx.stroke(rectangle);
	}
}
