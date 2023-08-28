// script.js

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("botaoCarregar").addEventListener("click", async () => {
        try {
            const response = await fetch("https://api.punkapi.com/v2/beers");
            const data = await response.json();
            const cervejasDiv = document.getElementById("cervejasDiv");
            cervejasDiv.innerHTML = "";
            cervejasDiv.appendChild(generateTable(data));
        } catch (error) {
            console.error("Erro ao carregar cervejas:", error);
        }
    });

    document.getElementById("botaoCarregarBancos").addEventListener("click", async () => {
        try {
            const response = await fetch("https://api.randomapi.com/v1/banks");
            const data = await response.json();
            const bancosDiv = document.getElementById("bancosDiv");
            bancosDiv.innerHTML = "";
            bancosDiv.appendChild(generateTable(data.results));
        } catch (error) {
            console.error("Erro ao carregar bancos:", error);
        }
    });
});