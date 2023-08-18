
let div = document.getElementById("meu amor");
let botao = document.getElementById("botaoCarregar");
let exibirNome = true; // Variável para controlar o estado de exibição

function alternarExibicao() {
  if (exibirNome) {
    div.innerHTML = `<h1>Guinness</h1>`;
  } else {
    div.innerHTML = ''; // Remove o conteúdo da div
  }

  exibirNome = !exibirNome; // Inverte o estado de exibição
}

botao.addEventListener("click", alternarExibicao);

