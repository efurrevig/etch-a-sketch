const DEFAULT_COLOR = "#000000";
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = 'color';

const container = document.getElementById("container");
const gridsize = document.getElementById("gridsize");

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function clearBox(elementID) {
    document.getElementById(elementID).innerHTML = "";
    makeGrid(currentSize);
}

function eraser() {
    currentMode = 'erase';
    currentColor = "#FFFFFF";
}

function newBox() {
    let foo = prompt("How many rows and columns would you like?");
    if (foo === null) {
        return;
    }
    while (isNaN(foo) || foo > 64) {
        foo = prompt("Please insert a number less than 100");
        if (foo === null) {
            return;
        }
    };
    currentSize = foo;
    clearBox("container")
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return;
    } else if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor;
    } else if (currentMode === 'erase') {
        e.target.style.backgroundColor = currentColor;
    }
}

function makeGrid(size) {
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (c = 0; c < (size*size); c++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener('mouseover', changeColor);
        cell.addEventListener('mousedown', changeColor);
    };
};

makeGrid(DEFAULT_SIZE);

