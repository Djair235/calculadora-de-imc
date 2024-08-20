let pesoInput = document.getElementById("pesoInput");
let alturaInput = document.getElementById("alturaInput");
let calcularButton = document.getElementById("calcularButton");
let resultH1 = document.getElementById("resultH1");
let divResultSection = document.getElementById("resultSection");

calcularButton.addEventListener("click", () => {
    if (pesoInput.value == "" || pesoInput.value == 0 || alturaInput.value == "" || alturaInput.value == 0) {
        divResultSection.style.display = "block";
        resultH1.innerHTML = "Suas informações estão incompletas."

    } else {
        divResultSection.style.display = "block";
        let imc = Number(pesoInput.value) / (Number(alturaInput.value) * Number(alturaInput.value));
        resultH1.innerHTML = `Seu IMC é de ${imc.toFixed(2)}`
    }
})