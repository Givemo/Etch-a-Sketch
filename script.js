const container = document.querySelector(".container");
const resetButton = document.querySelector(".button1");
const changeButton = document.querySelector(".button2");
const penChangeButton = document.querySelector(".button3");

// Make grids using the following function
function makeGrid(rows = 32, columns = 32) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-columns", columns);
  for (c = 0; c < rows * columns; c += 1) {
    const cell = document.createElement("div");
    cell.style.backgroundColor = "#f4f4f4";
    container.appendChild(cell).className = "grid-item";
  }
}

//the function penSketch is executed when mouse is over the container
container.addEventListener("mouseover", penSketch);

//This function add the background color to each cell
function penSketch(e) {
  const cell = e.target;
  cell.style.backgroundColor = getRandomColor();

  if (cell.style.opacity > 0.8);
}

//The function resetSketch is executed when resetButton is clicked
resetButton.addEventListener("click", resetSketch);

//This function changes the cell colors to default, i.e removes the sketch ink!
function resetSketch() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(function (div) {
    div.style.background = "#f4f4f4";
  });
}

//The function changeGrid is executed when changeButton is clicked
changeButton.addEventListener("click", changeGrid);

//This function removes the appended children, making the container empty and
//prompts the user for grid values and assign them to the makeGrid function which is executed right away
function changeGrid() {
  let gridValue = prompt("Enter a number from 2 to 64");
  container.innerHTML = "";
  if (isNaN(gridValue) || gridValue < 2 || gridValue > 64) {
    alert("The number should be between 2 & 64");
    makeGrid();
  } else {
    let x = gridValue;
    let y = gridValue;
    makeGrid(x, y);
  }
}

let cambioHue = 1;

//Random color change
function changeColor() {
  if (cambioHue == 0) {
    cambioHue = 50;
  } else {
    cambioHue--;
    let change = `hsl(180, 100%, ${cambioHue}%)`;
    return change;
  }
}

// Generate a random color eg "#FF6633" using the letters array
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Change the background color onclick
penChangeButton.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomColor();
});

makeGrid();
