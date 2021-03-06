/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

/*
[["1","1","1","1","0"],
 ["1","1","0","1","0"],
 ["1","1","0","0","0"],
 ["0","0","0","0","0"]]

*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let counter = 0;
  let rows = grid.length;
  console.log(rows);
  for (let i = 0; i < rows; i++) {
    //console.log("columns: ", grid[i].length)
    let columns = grid[i].length;
    //console.log("columns: ", rows[i])
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === "1") {
        let up = grid[i - 1][j] || undefined;
        let down = grid[i + 1][j];
        let right = grid[i][j + 1];
        let left = grid[i][j - 1];

        if (up === "0" && down === "0" && right === "0" && left === "0") {
          counter++;
        }
      }
    }
  }
  let extraIsland = grid[0][0] === "0" ? 0 : 1;
  return counter + extraIsland;
};

/* Solution */

/*

function numIslands(grid) {
  const H = grid.length;
  const W = H && grid[0].length;
  let count = 0;

  for (let r = 0; r < H; r++) {
    for (let c = 0; c < W; c++) {
      if (grid[r][c] === '0') continue;

      count++;
      dfs(r, c);
    }
  }
  return count;

  function dfs(r, c) {
    if (r < 0 || c < 0 || r === H || c === W) return;
    if (grid[r][c] === '0') return;

    grid[r][c] = '0';
    dfs(r-1, c);
    dfs(r+1, c);
    dfs(r, c-1);
    dfs(r, c+1);
  }
}*/
