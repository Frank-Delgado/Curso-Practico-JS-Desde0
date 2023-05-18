const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#resultado");

/*Se manda a llamar el "form" para escuchar su evento de esta manera:*/

form.addEventListener('submit', sumarInputValues);

function sumarInputValues (event){
//para prevenir que se recargue la pag por defecto se manda a llamar "preventDefault()":
event.preventDefault();
const operacion = Number(input1.value) + Number(input2.value);
pResult.innerText = "Resultado: " + operacion;
}

/*

para poder sumar estos 2 input tambien usariamos esto: 

function btnOnClick() {
    console.log(+input1.value + +input2.value);
  } 

*/


/*para evitar usar form en nuestro HTML podemos seguir usando nuestro button pero de esta manera://
<button type="button" id="btnCalcular">Calcular</button>

el type"button" especifica la funcion y dejaria de recargar como si fuera submit*/

