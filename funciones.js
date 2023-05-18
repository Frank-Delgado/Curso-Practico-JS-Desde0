// Declarativas

function miFuncion () {
return 3;
}

miFuncion();

//-------------------------------------------------------------------//


function sumar(a,b) {
    var suma = a + b;
    console.log("El resultado de " + a + " + " + b + " es: "+ suma);
}

sumar(5,3);

//El resultado de 5 + 3 es: 8


//Expresión 


var miFuncion = function () {
    return a + b; 
}

miFuncion();

function sumar(a,b)
var resultado = a + b;
return resultado;



//---------------------------------------------------------------------------------//



let nombre = 'Frank Eduardo';
let apellido = 'Delgado Duque';
let username = 'Slither';
let edad = 27;
let mail = 'duqueslash@gmail.com';
let esMayorDeEdad = true;
let dineroAhorrado = 1000;
let deudas = 100;


//-------------------------------------------------------------------------------------//
function nombreCompleto (name, lastname) {
    return name + ' ' + lastname
    }

nombreCompleto('frank', 'perez')
"frank perez"


const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + " " + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

//Mi nombre es Juan David Castro Gallego, pero prefiero que me digas juandc.


//para cambiar estas variables a una funcion seria de esta manera:


function nombreCompleto (name, lastname) {
    return name + ' ' + lastname
    }

function saludo(name, lastname, username) {
const completeName = nombreCompleto(name, lastname);

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + username + ".");

}

saludo('Frank', 'Delgado', 'Slither')







   