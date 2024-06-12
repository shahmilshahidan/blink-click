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

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

//console.log(width);
console.log(lights);