console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    2
  )
); //, 'Loser!');
console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    1
  )
); //, 'Winner!');
console.log(
  bingo(
    [
      ["HGTYRE", 74],
      ["BE", 66],
      ["JKTY", 74],
    ],
    3
  )
); //, 'Loser!');

// console.log("ABC".charCodeAt(1));

function bingo(ticket, win) {
  let result = 0;
  ticket.forEach((element) => {
    element[0].includes(String.fromCharCode(element[1])) ? result++ : null;
  });
    return result>= win ? "Winner!":"Loser!";
}
