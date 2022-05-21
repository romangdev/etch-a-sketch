const grid = document.querySelector(".grid");
const button = document.querySelector("button");
let squareCount = 256

//produce 256 squares for 16x16 grid
function produceGridSquares() {
    for (let i = 0; i < squareCount; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        grid.appendChild(gridSquare);
    }
}

let squareBrightness = 100;
//fill an individual square when mouse hovers over it permenantly
//output random RGB color value fill, make 5% darker each passover
function fillSquare() {
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            if (squareBrightness !== 0) {
                squareBrightness = squareBrightness - 5;
            }
            let rand1 = randomRGB();
            let rand2 = randomRGB();
            let rand3 = randomRGB();
            square.setAttribute("style", `background-color: rgb(${rand1}, ${rand2}, ${rand3}); 
            filter: brightness(${squareBrightness}%);`);
        });
    });
}

//prompt user to enter squares per side of grid they desire
//reset squareBrightness variable if this func is called
function getUserSquareCount() {
    squareBrightness = 100;
        do {
            squareCount = prompt("How many squares per side do you want?"
            + " (Choose number between 1 - 100)");
        } while (squareCount < 1 || squareCount > 100);
}

//remove the entire grid
function removeGrid() {
    const squaresRemoved = document.querySelectorAll(".grid-square");
    squaresRemoved.forEach((squareRemoved) => {
    squareRemoved.remove();
    });
}

//show the initial grid
function setStartingGrid() {
    grid.setAttribute("style", `height: 96.9vh; display: grid;
     grid-template: repeat(16, 1fr) / repeat(16, 1fr);`);
}

//show the user grid
function setUserGrid(squareCount) {
    grid.setAttribute("style", `height: 96.9vh; display: grid;
    grid-template: repeat(${squareCount}, 1fr) / repeat(${squareCount}, 1fr);`);
}

//add number of squares needed to fill user grid
function addUserSquares() {
    squareCount *= squareCount;
    for (let i = 0; i < squareCount; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        grid.appendChild(gridSquare);
    }
}

//return random number between 0 - 255 specifically for RGB value in fillsquare function
function randomRGB() {
    let random = Math.random();
    random = Math.floor(random * 255);
    console.log
    return random;
}

setStartingGrid();
produceGridSquares();

let squares = document.querySelectorAll(".grid-square");
fillSquare();

button.addEventListener("click", (button) => {
    getUserSquareCount();
    removeGrid();
    setUserGrid(squareCount);
    addUserSquares();
    squares = document.querySelectorAll(".grid-square");
    fillSquare();
});



