let grid = document.querySelector(".grid");
let button = document.querySelector("button");

//produce 256 squares for 16x16 grid
function produceGridSquares() {
    for (let i = 0; i < 256; i++) {
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
    button.addEventListener("click", (button) => {
        let squaresPerSide = 0
        do {
            squaresPerSide = prompt("How many squares per side do you want?"
            + " (Choose number between 1 - 100)");
        } while (squaresPerSide < 1 || squaresPerSide > 100);
    });
}

getUserSquareCount()
produceGridSquares();

let squares = document.querySelectorAll(".grid-square");

fillSquare();
