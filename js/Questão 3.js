var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Para que serve o comando git log?");
  if ((nome = "git log")) {
    alert("O " + nome + ", serve para iniciar o git. Parabéns você acertou!");
  }
  window.location="Questão 4.html";
};