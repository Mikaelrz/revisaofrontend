var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("Para quê serve o comando git status?");
  if ((nome = "git status")) {
    alert("O " + nome + ", serve para verificar o estado dos arquivos e diretórios. Parabéns você acertou!");
  }
  window.location="Questão 3.html";
};