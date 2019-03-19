class State {
  constructor(){
    this.board = [[null,null,null],
                  [null,null,null],
                  [null,null,null]];
    this.turn = 1;
    this.score = {
      player1: 0,
      player2: 0,
      ties: 0
    }
    this.totalMoves = 0;
  }
  checkWin(x,y){
    if((this.board[0][x] === this.board[1][x] && this.board[0][x] === this.board[2][x]) || (this.board[y][0] === this.board[y][1]
    && this.board[y][0] === this.board[y][2])){
      return true;
    }
    if(this.board[1][1] !== null && (this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2]
    || this.board[0][2] === this.board[1][1] && this.board[0][2] === this.board[2][0])){
      return true;
    }
    return false;
  }
  updateBoard(x,y){
    this.board[y][x] = this.turn ? 'X' : 'O';
    this.totalMoves++;
  }
  updateScore(winner){
    winner === "X" ? this.score.player1++ : this.score.player2++;
  }
  resetState(){
    this.board = [[null,null,null],
                  [null,null,null],
                  [null,null,null]];
    this.totalMoves = 0;

  }
}