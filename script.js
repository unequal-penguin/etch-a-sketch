const canvas = document.querySelector('#canvas');

let squareNumber = 16;
let canvasSize = canvas.clientHeight;

let squareSize = canvasSize / squareNumber;

console.log(canvasSize);
console.log(squareSize);

for (let i = 0; i < squareNumber; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  canvas.appendChild(row);

  for (let j = 0; j < squareNumber; j++) {
    const cell = document.createElement('div')
    cell.classList.add('cell');
    cell.style.height = `${squareSize}px`;
    cell.style.width = `${squareSize}px`;
    row.appendChild(cell);
  }
}