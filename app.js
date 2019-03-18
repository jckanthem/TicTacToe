let boxes = document.querySelectorAll('th');
let turn = 1;
let board;

var initialize = () => {
  document.getElementById('turn').style.display = "";
  document.getElementById('winMessage').style.display = "none"
  board = [[null,null,null],[null,null,null],[null,null,null]];
  boxes.forEach(box => {
    box.innerHTML = '';
    box.addEventListener('click', innerGameLogic)
  });
}

document.querySelector('button').addEventListener('click', initialize)
var innerGameLogic = function(e){
  this.innerHTML = turn ? 'X' : 'O';
  let coords = this.className;
  updateBoard(coords, turn);
  if(checkWin(board,coords)){
    let winner = turn ? 'X' : 'O';
    updateGameState(winner);
  } else{
  turn = !turn
  document.getElementById('turn').innerHTML = `Turn: ${turn ? 'X' : 'O'}`
  }
}

var checkWin = (board, coords) => {
  //return true or false 
  let y = coords[coords.length-1];
  let x = coords[coords.length-2];
  if((board[0][x] === board[1][x] && board[0][x] === board[2][x]) || (board[y][0] === board[y][1] && board[y][0] === board[y][2])){
    return true
  }
  if(board[1][1] !== null && (board[0][0] === board[1][1] && board[0][0] === board[2][2] || board[0][2] === board[1][1] && board[0][2] === board[2][0])){
    return true
  }
  return false;
}

var updateBoard = (coords, turn) => {
  // use coords to change the board matrix based on whose turn it is
  let y = coords[coords.length-1];
  let x = coords[coords.length-2];
  board[y][x] = turn ? 'X' : 'O';
}

var updateGameState = (winner) => {
  // update the game stats below the board, display a winner message and the new game button
  boxes.forEach(box => box.removeEventListener('click', innerGameLogic));
  document.getElementById('gameCount').innerHTML = Number(document.getElementById('gameCount').innerHTML) + 1;
  (winner === 'X')
  ? document.getElementById('xWins').innerHTML = Number(document.getElementById('xWins').innerHTML) + 1
  : document.getElementById('oWins').innerHTML = Number(document.getElementById('oWins').innerHTML) + 1;
  document.getElementById('winMessage').innerHTML = `${winner} Wins!`
  document.getElementById('winMessage').style.display = "";
  document.querySelector('button').style.display = "";
  document.getElementById('turn').style.display = "none"
}

initialize();