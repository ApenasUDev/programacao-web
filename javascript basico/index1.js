

function carregarDiv(){

   let div = document.getElementById("meu amor")

   div.innerHTML = `<h1>Guinness</h1>`

}



let botao = document.getElementById("botaoCarregar")

botao.addEventListener("click", carregarDiv)                 


