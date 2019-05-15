/* eslint-disable no-console */
// Q1:
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log("Q1:");
console.log(reverseString('hello'));
console.log('\n');


// Q2:
function sqrtOrNot(number) {
  var currentNumber = number;
  var currentSub = 1;
  while (currentNumber >= 0) {
    currentNumber -= currentSub;
    currentSub += 2;
    if (currentNumber === 0) {
      return true;
    }
  }
  return false;
}

console.log("Q2:");
console.log(sqrtOrNot(4));
console.log(sqrtOrNot(3));
console.log(sqrtOrNot(-2));
console.log(sqrtOrNot(0));
console.log('\n');


// Q3:
function mergeIntervals(intervals, insertedInterval) {
  var result = [];
  var lowerbound = insertedInterval[0];
  var upperbound = insertedInterval[1];
  var inserted = false;
  for (var index in intervals) {
    if (intervals[index][1] < insertedInterval[0]) {
      result.push(intervals[index]);
    } else {
      if (intervals[index][0] <= insertedInterval[1]) {
        lowerbound = Math.min(intervals[index][0], lowerbound);
        upperbound = Math.max(intervals[index][1], upperbound);
      }
      if (intervals[index][1] >= insertedInterval[1]) {
        if (inserted === false) {
          result.push([lowerbound, upperbound]);
          inserted = true;
        }
        if (intervals[index][0] > insertedInterval[1]) {
          result.push(intervals[index]);
        }
      }
    }
  }
  if (inserted === false) {
    result.push([lowerbound, upperbound]);
  }
  return result;
}

console.log("Q3:");
console.log((mergeIntervals([
  [1, 3],
  [6, 9]
], [2, 5])));
console.log((mergeIntervals([
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16]
], [4, 9])));
console.log((mergeIntervals([
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [13, 16]
], [11, 12])));
console.log((mergeIntervals([
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [13, 16]
], [11, 14])));
console.log((mergeIntervals([
  [1, 2],
  [3, 5],
  [6, 7],
  [9, 10],
  [13, 16]
], [8, 11])));
console.log((mergeIntervals([
  [1, 2],
  [3, 5],
  [6, 7],
  [9, 10],
  [13, 16]
], [14, 15])));
console.log((mergeIntervals([
  [1, 2],
  [3, 5],
  [6, 7],
  [9, 10],
  [13, 16]
], [17, 18])));
console.log((mergeIntervals([
  [3, 5],
  [6, 7],
  [9, 10],
  [13, 16]
], [1, 2])));
console.log('\n');


// Q4:
function findWord(board, word) {
  var found = false;
  var grid = [];
  for (var col = 0; col < board.length; col++) {
    for (var row = 0; row < board[col].length; row++) {

      // Deep copy
      for (var i = 0; i < board.length; i++)
        grid[i] = board[i].slice();

      found = eachStartPosition(grid, word, row, col);
      if (found) {
        return found;
      }
    }
  }
  return found;
}

function eachStartPosition(grid, word, row, col) {
  var currentGrid = [];
  if (!word) {
    return true;
  }
  if (row < 0 || row >= grid[0].length || col < 0 || col >= grid.length || !grid[col][row]) {
    return false;
  }
  if (grid[col][row] === word[0]) {

    // Deep copy
    for (var i = 0; i < grid.length; i++)
      currentGrid[i] = grid[i].slice();

    delete currentGrid[col][row];
    return eachStartPosition(currentGrid, word.slice(1), row + 1, col) || eachStartPosition(currentGrid, word.slice(1), row - 1, col) || eachStartPosition(currentGrid, word.slice(1), row, col + 1) || eachStartPosition(currentGrid, word.slice(1), row, col - 1);
  }
  return false;
}


console.log("Q4:");
console.log(findWord([
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
], "ABCCED"));
console.log(findWord([
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
], "SEE"));
console.log(findWord([
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
], "ABCB"));
console.log(findWord([
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
], "ABCB"));
console.log(findWord(
  [
    ['A']
  ], "A"));
console.log(findWord(
  [
    ["C", "A", "A"],
    ["A", "A", "A"],
    ["B", "C", "D"]
  ],
  "AAB"));
console.log('\n');


// Q5:
function adder(num1, num2) {
  var carry;
  while (num2) {
    carry = num1 & num2;
    num1 = num1 ^ num2;
    num2 = carry << 1;
  }
  return num1;
}

console.log("Q5:");
console.log(adder(1, 2));
console.log(adder(10, 12));
console.log('\n');