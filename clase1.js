const h1 = document.querySelector('h1');
const input1 = document.querySelector('#num1');
const form = document.querySelector('#form');
const input2 = document.querySelector('#num2');
const calcular = document.querySelector('#btn-calcular');
const pAnswer = document.querySelector('#answer');

form.addEventListener('submit', sumarInputValues)

function sumarInputValues(event) {
    console.log({ event });
    event.preventDefault();
    const suma = parseFloat(input1.value) + Number(input2.value);
    pAnswer.innerText = "El resultao de la suma es " + suma;
}