/**GridTraveler say that you are a traveler on a 2_D grid. You begin in top_left corner and your goal is to travel to the bottom_right corner. you only move down or right. In how many ways can you travel to the goal on a grid with dimension m * n ? */

const gridTraveler = (m,n, memo={}) => {
  // store m & n value in key
const key = m + ',' + n;
//check if key is in memo[] object
if(key in memo) return memo[key];
// if m & n is 1 than return 1
if(m === 1 && n === 1) return 1;
// if any of this is 0 than return 0
if(m === 0 || n === 0) return 0; 
// store value in memo[] object
memo[key] = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo);
return memo[key];
};

console.log(gridTraveler(2,3)); // 3
console.log(gridTraveler(3,3)); // 6
console.log(gridTraveler(29,29)); // 7648690600760440
// it take longer time but in momoization it calculate very fastly
