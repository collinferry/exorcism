export const annotate = (input) => {
  //handle errors
  if (input.length <= 1){
    return input;
  } else {
    var width = input[0].length,
      height = input.length;
  }
  var board = [];

  //break rows into arrays & replace blanks with zeros
  for (var i = 0; i < height; i++){
    board.push(input[i].split(''));
    board[i] = board[i].map(e => e.replace(' ', '0'));
  }
  console.log("1: "+board);

  //count bombs for x +/- 1 (but not less than 0 index)

  for (var j = 0; j < width; j++){
    for (var k = 0; k < height; k++){
      if (board[j][k] == 0){
        var bombs = 0;
          if (board[j-1]){
            if (board[j-1][k-1] == "*"){ bombs += 1; }
            if (board[j-1][k] == "*"){ bombs += 1; }
            if (board[j-1][k+1] == "*"){ bombs += 1; }
          }
          if (board[j][k-1] == "*"){ bombs += 1; }
          if (board[j][k+1] == "*"){ bombs += 1; }
          if (board[j+1]){
            if (board[j+1][k-1] == "*"){ bombs += 1; }
            if (board[j+1][k] == "*"){ bombs += 1; }
            if (board[j+1][k+1] == "*"){ bombs += 1; }
          }
        board[j].splice(k, 1, bombs);
        }
      }
    }
console.log("2: "+board);
    //replace zeros with blanks & stringify
    for (var b = 0; b < height; b++){
      board[b] = board[b].map(function(num){
        if (num == 0){ return ' '; } else {
          return num;
        }
      });
      board[b] = board[b].join('');
    }
    console.log("3: "+board);

    return board;
  }

annotate([
  ' ',
  '*',
  ' ',
  '*',
  ' ',
]);
