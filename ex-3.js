// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;

for (let min of scores) {
  if (min <= Math.min(...scores)) {
    minScore = min;
  }
}

// Start coding here

console.log(minScore);
