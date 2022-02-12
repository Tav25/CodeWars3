// Bit Counting
// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

// assert.strictEqual(countBits(10), 2);

function countBits(n) {
  let result = 0;
  let bit  = n.toString(2)
  Array.from(bit).forEach((element) => {
    if (element === "1") {
      result++;
    }
  });
  return result;
}

console.log(countBits(6905847168)); // 1

countBits(6905847168) //should equal 18 expected 17 to equal 18

console.log((6905847168 >>> 0).toString(2))


10011011100111101101110110000000
110011011100111101101110110000000
