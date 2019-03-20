class View {
  constructor(){
    this.player1 = document.getElementById('player1');
    this.player2 = document.getElementById('player2');
    this.restartButton = document.querySelector('button');
    this.turnSpan = document.getElementById('turn');
    this.winMessage = document.getElementById('winMessage');
    this.boxes = document.querySelectorAll('.board > div');
    this.gameCount = document.getElementById('gameCount');
    this.ties = document.getElementById('ties');
    this.xWins = document.getElementById('xWins');
    this.oWins = document.getElementById('oWins');
    this.updateScoreboard = this.updateScoreboard.bind(this);
    this.restartView = this.restartView.bind(this);
    this.changeTurn = this.changeTurn.bind(this);
    this.tieGameUpdate = this.tieGameUpdate.bind(this);
    this.endGameViewUpdate = this.endGameViewUpdate.bind(this);
  }
  updateScoreboard(input, state){
    this.player1.innerHTML = `${(input.player1)} (X)`;
    this.player2.innerHTML = `${input.player2} (O)`;
  }
  restartView(){
    this.restartButton.style.display = "none";
    this.turnSpan.style.display = "";
    this.winMessage.style.display = "none";
    this.boxes.forEach(box => {
      box.innerHTML = '';
    });
  }
  changeTurn(context, state, player1, player2){
    context.innerHTML = state.turn ? 'X' : 'O';
    this.turnSpan.innerHTML = `<b>Turn:</b> ${!state.turn ? player1 + ' (X)' : player2 + ' (O)'}`;
  }
  tieGameUpdate(){
    this.gameCount.innerHTML = state.score.player1 + state.score.player2 + state.score.ties;
    this.ties.innerHTML = state.score.ties;
    this.winMessage.innerHTML = `Tie Game!`
    this.winMessage.style.display = "";
    this.restartButton.style.display = "";
    this.turnSpan.style.display = "none";
  }
  endGameViewUpdate(winner, state, player1, player2){
    this.gameCount.innerHTML = state.score.player1 + state.score.player2 + state.score.ties;
    this.xWins.innerHTML = state.score.player1;
    this.oWins.innerHTML = state.score.player2;
    this.winMessage.innerHTML = `${winner === 'X' ? player1 + ' (X)' : player2 + ' (O)'} Wins!`;
    this.winMessage.style.display = "";
    this.restartButton.style.display = "";
    this.turnSpan.style.display = "none";
  }
}