function setarData() {
let elementoData = document.querySelector(".js-data");

let data = new Date();

const objData = {
    year: 'numeric', //pra passar o ano
    month:'long', // pra passar o mês em extenso 
    weekday:'long', // pra passar o dia em extenso. ex: "segunda, terça, quarta"
    day: 'numeric', // pra passar o dia em Data
};

elementoData.textContent = data.toLocaleTimeString("pt-BR", objData)

//console.log(data.toLocaleTimeString("pt-BR", objData));
}

setarData();

setInterval(() => {
    setarData();
}, 1000);