let url = "https://api.adviceslip.com/advice";

const botao = document.getElementById("slip");
const texto = document.querySelector(".texto");
const advice = document.querySelector(".advice");
let advices = 0;
window.addEventListener('load', chamaFetch())

function chamaFetch() {
  fetch(url).then((response) => {
    response.json().then((data) => {
      let frases = data.slip.advice;
      texto.innerHTML = frases;
      advices = data.slip.id;
      advice.innerHTML = "ADVICE #" + advices;
    });
  });
}

botao.addEventListener("click", () => {
  chamaFetch();
});
