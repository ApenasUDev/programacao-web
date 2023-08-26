let cervejas = [];
let bancos = [];

// cs é um array de cervejas
const carregarDiv = cs => {
    const div = document.getElementById("cervejasDiv");
    const itensHtml = cs.map(({ name, alcohol, blg, brand, hop, ibu, id, malts, style, uid, yeast }) =>
        `<div>${name} -- ${alcohol} -- ${blg} -- ${brand} -- ${hop} -- ${ibu} -- ${id} -- ${malts} -- ${style} -- ${uid} -- ${yeast}</div>`
    );
    div.innerHTML = itensHtml.join("\n");
};

const carregarDivBancos = cs => {
    const div = document.getElementById("cervejasDiv");
    const itensHtml = cs.map(({ account_number, bank_name, iban, id, routing_number, swift_bic, uid }) =>
        `<div>${bank_name} -- ${account_number} -- ${iban} -- ${routing_number} -- ${swift_bic} -- ${uid} -- ${id}</div>`
    );
    div.innerHTML = itensHtml.join("\n");
};

async function carregarBancos() {
    try {
        let res = await fetch("https://random-data-api.com/api/v2/banks?size=3");
        bancos = await res.json();
        carregarDivBancos(bancos);
    } catch (err) {
        document.getElementById("cervejasDiv").innerHTML = "Fudeu...";
    }
}

async function carregarCervejas() {
    try {
        let res = await fetch("https://random-data-api.com/api/v2/beers?size=3");
        cervejas = await res.json();
        carregarDiv(cervejas);
    } catch (err) {
        document.getElementById("cervejasDiv").innerHTML = "Fudeu...";
    }
}

let botao = document.getElementById("botaoCarregar");
let botao2 = document.getElementById("botaoCarregarBancos");

botao.addEventListener("click", carregarCervejas);
botao2.addEventListener("click", carregarBancos);
