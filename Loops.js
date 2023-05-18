var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, $(estudiante)`);
}

for(var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

//al mandar la funcion me arroja este resultado://

Hola, Maria
Hola, Sergio 
Hola, Rosa 
Hola, Daniel

//Tenemos otra forma de mandar dicha funcion de esta manera://

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, $(estudiante)`);
}

//este es otro modo de saludar a todos los estudiantes:

for(var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}

//al mandar la funcion me arroja el mismo resultado://

Hola, Maria
Hola, Sergio 
Hola, Rosa 
Hola, Daniel



//..........................................................//


for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

/* El valor de i es: 0
   El valor de i es: 1
   El valor de i es: 2
   El valor de i es: 3
   El valor de i es: 4 */


//si queremos cambiar esta representacion de ciclo a while seria de esta manera://

let i = 0;

while (i < 5) {
    console.log("El valor de i es: " + i);
}

/*El valor de i es: 0
  El valor de i es: 1
  El valor de i es: 2
  El valor de i es: 3
  El valor de i es: 4
4*/


//............................................................................

/*Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. 
Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, 
volvemos a empezar.

💡 Pista: puedes usar la función prompt de JavaScript.*/

let respuesta;

while (respuesta != '4') {
    let pregunta = prompt('¿Cuánto es 2 + 2?');
    respuesta = pregunta;
}

//----------------------------------------------------------------

var respuestas;
do {respuestas = prompt('¿Cuánto es 2 + 2?')} while (respuestas != 4);

alert('felicitaciones');




//--------------------------------------------------------------------


let /*respuesta*/ = 0;
do {
   	respuesta = prompt("Cuánto es 2 + 2?");
   	if(respuesta == 4) console.log("FELICIDADES!");
} while (respuesta != 4);

