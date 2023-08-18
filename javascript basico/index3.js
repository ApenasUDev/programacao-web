
let div = document.getElementById("meu amor");
let botao = document.getElementById("botaoCarregar");
let exibirNome = true; // Variável para controlar o estado de exibição

function alternarExibicao() {
    div.style.opacity = 0; // Inicia o efeito de fade out
    div.style.opacity = 0.03; // Inicia o efeito de fade out
    div.style.opacity = 0.05; // Inicia o efeito de fade out

    setTimeout(function () {
        if (exibirNome) {
            div.innerHTML = `<h1>Guinness</h1>`;
        } else {
            div.innerHTML = ''; // Remove o conteúdo da div
        }

        exibirNome = !exibirNome; // Inverte o estado de exibição

        div.style.opacity = 1; // Inicia o efeito de fade in
    }, 100); // Tempo de espera correspondente à duração da transição CSS
}

botao.addEventListener("click", alternarExibicao);
