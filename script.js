let url = "https://api.adviceslip.com/advice";
let frases;
const botao = document.getElementById("slip");
const texto = document.querySelector(".texto");
const advice = document.querySelector(".advice");
let advices = 0;

botao.addEventListener("click", () => {
  fetch(url).then((response) => {
    response.json().then((data) => {
      frases = data.slip.advice;
      texto.innerHTML = frases;
      advices = data.slip.id;
      advice.innerHTML = "ADVICE #" + advices;
    });
  });
});
