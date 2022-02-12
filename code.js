
var whatTimeIsIt = function (angle) {
    let h = Math.floor(angle / 30);
    let m = Math.trunc((60 / 30) * (angle % 30));
    if (h === 0) {
      h = 12;
    }
    return `${zero(h)}${h}:${zero(m)}${m}`;
  };
  
  function zero(x) {
    return x < 10 ? "0" : "";
  }

console.log(whatTimeIsIt(90));
console.log(whatTimeIsIt(40)); //01.20
console.log(whatTimeIsIt(339.3473072102758)); //339.3473072102758 = 11:18
