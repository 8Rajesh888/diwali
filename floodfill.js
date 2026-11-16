function checkGrid(grid) {
  if (grid.length === 0) return true;
  const length = grid[0].length;
  for (const r of grid) {
    if (! Array.isArray(r) ||r.length !== length)
      return true;
  }
  return false;
}

function doFloodFill(grid, row, col, newVal, oldVal) {
  if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] !== oldVal || oldVal === newVal) {
    return ;
  }
  
  grid[row][col] = newVal;
  doFloodFill(grid, row + 1, col, newVal, oldVal);
  doFloodFill(grid, row - 1, col, newVal, oldVal);
  doFloodFill(grid, row, col + 1, newVal, oldVal);
  doFloodFill(grid, row, col - 1, newVal, oldVal);
  return ;
}

function floodFill(grid, row, col, newVal, oldVal) {
  if (Grid(grid)) return grid;
  
  doFloodFill(grid, row, col, newVal, oldVal);
  return grid;
}
/*
const grid = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1]
];

console.log(floodFill(grid, 2, 2, 1));*/

/*
const grid = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1]
];

console.log(floodFill(grid, 1, 1, 1));*/

const grid = [
  [0, 0, 0, 0],
  [0, 2, 2, 0],
  [0, 2, 0, 0],
  [0, 0, 0, 0]
];

console.log(floodFill(grid, 1, 1, 3, grid[1][1]));