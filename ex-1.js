// Exercise #1: Decrease the Student Scores
let scores = [89, 70, 60, 50, 100, 71];
// console.log(scores);

// Start coding here
let newScores = [];

for (let score of scores) {
  score -= 10;
  newScores.push(score);
}

console.log(newScores);
