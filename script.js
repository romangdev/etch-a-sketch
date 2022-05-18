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

//fill an individual square when mouse hovers over it permenantly
function fillSquare() {
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.setAttribute("style", "background-color: black");
        });
    });
}

function getUserSquareCount() {
        do {
            squareCount = prompt("How many squares per side do you want?"
            + " (Choose number between 1 - 100)");
        } while (squareCount < 1 || squareCount > 100);
}

function removeGrid() {
    const squaresRemoved = document.querySelectorAll(".grid-square");
    squaresRemoved.forEach((squareRemoved) => {
    squareRemoved.remove();
    });
}

function setStartingGrid() {
    grid.setAttribute("style", `height: 96.9vh; display: grid;
     grid-template: repeat(16, 1fr) / repeat(16, 1fr);`);
}

function setUserGrid(squareCount) {
    grid.setAttribute("style", `height: 96.9vh; display: grid;
    grid-template: repeat(${squareCount}, 1fr) / repeat(${squareCount}, 1fr);`);
}

function addUserSquares() {
    squareCount *= squareCount;
    for (let i = 0; i < squareCount; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        grid.appendChild(gridSquare);
    }
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



