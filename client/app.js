class App {
  initialize(){
    document.querySelector('button').addEventListener('click', view.restartView);
    input.getPlayerNames();
    view.updateScoreboard(input,state);
    view.restartView();
    document.querySelectorAll('.board > div').forEach(box => {
      box.innerHTML = '';
      box.addEventListener('click', function(e){
        input.onClick(this, state, view)
      })
    });
  }
}
let app = new App();
let state = new State();
let input = new Input();
let view = new View()

app.initialize();