// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore = scores[0]; // กำหนด value minScore ให้เป็น scores Index ที่ 0 เพื่อใช้เปรียบค่ากับ ตัวอื่นๆใน array ค่ะ
// Start coding here
for (let i = 0; i < scores.length; i++) {
  if (scores[i] < minScore) {
    minScore = scores[i];
  }
}
console.log(minScore);
