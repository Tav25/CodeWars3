// Bingo Card
//https://www.codewars.com/kata/566d5e2e57d8fae53c00000c/train/javascript

// 5 numbers from the B column in the range 1 to 15
// 5 numbers from the I column in the range 16 to 30
// 4 numbers from the N column in the range 31 to 45
// 5 numbers from the G column in the range 46 to 60
// 5 numbers from the O column in the range 61 to 75
function getCard() {
  const arrB = shuffle(genArr(1, "B")).slice(0, 5);
  const arrI = shuffle(genArr(16, "I")).slice(0, 5);
  const arrN = shuffle(genArr(31, "N")).slice(0, 4);
  const arrG = shuffle(genArr(46, "G")).slice(0, 5);
  const arrO = shuffle(genArr(61, "O")).slice(0, 5);
  return [...arrB, ...arrI,...arrN,...arrG,...arrO];
}

function genArr(numStart, letter) {
//   console.log(Array.from({ length: 15 }, (_, i) => letter + (i + numStart)));
  return Array.from({ length: 15 }, (_, i) => letter + (i + numStart));
}

function makeRandomArr(a, b) {
  return Math.random() - 0.5;
}

const shuffle = (arr) => {
  return arr.sort(() => Math.round(Math.random() * 100) - 50);
};

console.log(getCard());
