var button = document.querySelector("button");

button.onclick = function () {
  var nome = prompt("O que devemos fazer para commitar da maneira correta?");
  if ((nome = "o commit")) {
    alert("Sobre " + nome + ", É recomendável que commite apenas quando não ter erros no código. Parabéns você acertou, o emoji está sendo derrotado :)");
  }
  window.location="Questão 6.html";
}; 