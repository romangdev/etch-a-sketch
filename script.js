let grid = document.querySelector(".grid");

function produceGridSquares() {
    for (let i = 0; i < 256; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        grid.appendChild(gridSquare);
    }
}

produceGridSquares();