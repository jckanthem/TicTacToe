class View {
  updateScoreboard(input, state){
    document.getElementById('player1').innerHTML = `${(input.player1)} (X)`;
    document.getElementById('player2').innerHTML = `${input.player2} (O)`;
  }
  restartView(){
    document.querySelector('button').style.display = "none";
    document.getElementById('turn').style.display = "";
    document.getElementById('winMessage').style.display = "none";
    document.querySelectorAll('.board > div').forEach(box => {
      box.innerHTML = '';
    });
  }
  changeTurn(context, state, player1, player2){
    context.innerHTML = state.turn ? 'X' : 'O';
    document.getElementById('turn').innerHTML = `<b>Turn:</b> ${state.turn ? player1 + ' (X)' : player2 + ' (O)'}`;
  }
  tieGameUpdate(){
    document.getElementById('gameCount').innerHTML = state.score.player1 + state.score.player2 + state.score.ties;
    document.getElementById('ties').innerHTML = state.score.ties;
    document.getElementById('winMessage').innerHTML = `Tie Game!`
    document.getElementById('winMessage').style.display = "";
    document.querySelector('button').style.display = "";
    document.getElementById('turn').style.display = "none";
  }
  endGameViewUpdate(winner, state, player1, player2){
    document.getElementById('gameCount').innerHTML = state.score.player1 + state.score.player2 + state.score.ties;
    document.getElementById('xWins').innerHTML = state.score.player1;
    document.getElementById('oWins').innerHTML = state.score.player2;
    document.getElementById('winMessage').innerHTML = `${winner === 'X' ? player1 + ' (X)' : player2 + ' (O)'} Wins!`;
    document.getElementById('winMessage').style.display = "";
    document.querySelector('button').style.display = "";
    document.getElementById('turn').style.display = "none";
  }
}