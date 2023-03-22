const canvas = document.querySelector('#canvas');
const button = document.querySelector('#grid-btn');

let mousePressed = false;
let squareNumber = 16;
let canvasSize = canvas.clientHeight;

button.addEventListener("click", changeGridSize);

function drawGrid(squareNumber) {
  let squareSize = canvasSize / squareNumber;

  for (let i = 0; i < squareNumber; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    canvas.appendChild(row);

    for (let j = 0; j < squareNumber; j++) {
      const cell = document.createElement('div')
      cell.classList.add('cell');
      cell.style.height = `${squareSize}px`;
      cell.style.width = `${squareSize}px`;
      cell.addEventListener('mousedown', mouseDown);
      cell.addEventListener('mouseup', mouseUp);
      cell.addEventListener('mousemove', changeSquareColor);
      row.appendChild(cell);
    }
  }
}

function changeGridSize() {
  var input = prompt("Please enter a number:");
  removeAllChilds(canvas);
  drawGrid(parseInt(input));
}

function removeAllChilds(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function mouseDown() {
  mousePressed = true;
  this.style.backgroundColor = 'black';
}

function mouseUp() {
  mousePressed = false;
}

function changeSquareColor() {
  if (mousePressed)
    this.style.backgroundColor = 'black';
}