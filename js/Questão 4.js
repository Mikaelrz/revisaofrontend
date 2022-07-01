var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Qual é o comando para ver a versão do git instalada?");
  if ((nome = "git -version")) {
    alert("O " + nome + ", serve para ver a versão do git instalada. Parabéns você acertou :)");
  }
  window.location="Questão 5.html";
};