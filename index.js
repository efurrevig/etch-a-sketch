const container = document.getElementById("container");
const gridsize = document.getElementById("gridsize");

function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
}

function newBox() {
    let foo = prompt("How many rows and columns would you like?");
    if (foo === null) {
        return;
    }
    while (isNaN(foo) || foo > 64) {
        foo = prompt("Please insert a number less than 100");
    };
    clearBox("container")
    makeGrid(foo);
}

function makeGrid(size) {
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (c = 0; c < (size*size); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener('mouseover', e => e.target.classList.add('hover-class'));
    };
};

/*grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

 for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div')
    gridElement.classList.add("grid-element")
    gridElement.addEventListener('mouseover', changeColor)
    gridElement.addEventListener('mousedown', changeColor)
    c.appendChild(gridElement)
  }


*/

makeGrid(16);

