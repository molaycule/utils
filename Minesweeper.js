// run `node index.js` in the terminal

/**
 * Write a function that returns a nxn grid, with x number of elements marked as true, and all other elements marked false.
 *
 * The x value will never be greater than n^2
 *
 * The true values must be spread randomly throught the result
 *
 * @param n {number} Dimension of grid
 * @param x {number} Number of bombs
 * @return {boolean[][]}
 */
function mineSweeper(n, x) {
  let grid = [];
  let points = new Array(n * n).fill(0).map((x, i) => i);

  for (let i = 0; i < n; i++) {
    let row = new Array(n).fill(false);
    grid.push(row);
  }

  for (let i = 0; i < x; i++) {
    let randomPointOnGrid = Math.floor(Math.random() * points.length);
    let posX = Math.floor(points[randomPointOnGrid] / n);
    let posY = points[randomPointOnGrid] % n;
    points.splice(randomPointOnGrid, 1);
    grid[posX][posY] = true;
  }

  console.log(grid);
}

mineSweeper(2, 2);
/**
 * [
 *  [true, false],
 *  [false, true]
 * ]
 */
