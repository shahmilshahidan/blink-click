// Define number of lights
const width = 4;
const height = 5;

// Create an array of width x height
const lights = [[[], [], [], [], []], 
	[[], [], [], [], []], 
	[[], [], [], [], []], 
	[[], [], [], [], []]];

const circle = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function startButton() {
	let x = document.querySelector("button");
	//TODO:Replace below event with table 1x4
	x.addEventListener("click", createTable());
	//x.addEventListener("click", () => {
  	//	const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  	//	document.body.style.backgroundColor = rndCol;
	//});
}

function createTable() {
	const table = document.createElement("table");
	const tbody = document.createElement("tbody");
	
	for (let i = 0; i < 1; i++){
		const row = document.createElement("tr");

		for (let j = 0; j < 4; j++){
			const cell = document.createElement("td");
			const cellText = document.createTextNode(`row ${i}, col ${j}`);
			cell.appendChild(cellText);
			row.appendChild(cell);
		}

		tbody.appendChild(row);
	}

	table.appendChild(tbody);
	document.body.appendChild(table);
	table.setAttribute("border", "2");

}

circle.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
