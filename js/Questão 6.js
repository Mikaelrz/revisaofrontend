var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("No git bash, qual comando você usa para criar pasta?");
  if ((nome = "mkdir")) {
    alert("O " + nome + ", mkdir + o nome da pasta, Parabéns você acertou, o emoji foi derrotado ᕙ( ͡❛ ͜ʖ ͡❛)ᕗ");
  }
  window.location="Final.html";
}; 