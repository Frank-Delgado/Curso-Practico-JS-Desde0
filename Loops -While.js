var estudiantes = ["Maria", "Daniel", "Rosa", "Sergio"];
function saludarEstudiantes (estudiante) {
    console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiantes (estudiante);
}

Hola, Maria
Hola, Daniel
Hola, Rosa
Hola, Sergio


//luego usaremos el console.log para ir sacando los nombres con el "Shift" rompiendo el ciclo.// 

var estudiantes = ["Maria", "Daniel", "Rosa", "Sergio"];
function saludarEstudiantes (estudiante) {
    console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0) {
    console.log (estudiantes);
    var estudiante = estudiantes.shift();
    saludarEstudiantes (estudiante);
}


(4) ['Maria', 'Daniel', 'Rosa', 'Sergio']
 Hola, Maria
(3)['Daniel', 'Rosa', 'Sergio']
 Hola, Daniel
(2)['Rosa', 'Sergio']
 Hola, Rosa
['Sergio']
Hola, Sergio