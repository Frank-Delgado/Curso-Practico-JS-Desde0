const body = document.querySelector("body");
const Valor1 = document.querySelector("#Valor1");
const Valor2 = document.querySelector("#Valor2");
const Calc = document.querySelector("#calc");
const Sumar = document.querySelector("#suma");
const Resta = document.querySelector("#restar");
const Multiplicar = document.querySelector("#multi");
const Dividir = document.querySelector("#div");

const resultado = document.createElement('h2');

function calculador() {
    var  dato1 = Number(Valor1.value);
    var  dato2 = Number(Valor2.value);
    var datos = 0;
    if (suma.checked){
        calculador = dato1 + dato2;
    } else if (resta.checked){
        calculador = dato1 - dato2;
    } else if (multi.checked){
        calculador = dato1 * dato2;
    } else {
        calculador = dato1 / dato2;
    }
 
calculador = `Tu resultado es: ${calculador}`;
resultado.innerHTML = calculador;
body.append(resultado);
}