if (true) {
 console.log ("Hola");
} else {
    console.log("Soy falso");
}


var edad = 18;

if (edad === 18) {
    console.log ("Puedes votar, será tu primera vez");
} else if (edad > 18) {
    console.log ("votaras de nuevo");
} else {
    console.log ("No puedes votar");
}


condition ? true : false; 

var numero = 1;
var resultado = numero === 1 ? "Sí, soy un uno" : "No, no soy uno";


var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";

 function resultado (usuario,cpu) {
    if (usuario === piedra && cpu === tijera) {
    console.log ("Ganaste");
    }
    else if (usuario === papel && cpu === piedra) {
    console.log ("Ganaste");
    }
    else if (usuario === tijera && cpu === papel) {
    console.log ("Ganaste");
    }
    else if (usuario === cpu) {
    console.log ("Empate");  
    }
    else {
        console.log ("Perdiste");
    }
}
resultado (tijera,tijera)
Empate

resultado (piedra,tijera)
Ganaste

resultado (papel, tijera)
Perdiste


/*--------------------------------------------------------------------------------


En este desafío vas a recibir un objeto car como parámetro de la función solution.

Este objeto puede contener diferentes propiedades. 
Debes asegurarte de que tenga la propiedad 
licensePlate (la placa del auto). Si sí la tiene, devuelve el objeto original 
con la propiedad drivingLicense como true. Si no la tiene, devuelve el objeto 
original con la propiedad drivingLicense como false.*/



 function solution(car) {
    if (car.licensePlate) {
      car.drivingLicense = true;
    } else {
      car.drivingLicense = false;
    }
    return car;
  }


  //---------------------------------------------------------------------------


  function conseguirTipoSuscripcion(suscripcion) {

    if (suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    
    if (suscripcion == 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    
    if (suscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    
    if (suscripcion == 'ExpertDuo') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }

    console.warn('Ese tipo de suscripción no existe')
}

/*Si queremos simplificar este codigo seria de esta forma:*/


const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertDuo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
};

tiposDeSuscripciones.free
"Solo puedes tomar los cursos gratis"


function conseguirTipoSuscripcion (suscripcion) {
    if (tiposDeSuscripciones[suscripcion]){
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }
    console.warn("Este tipo de suscripción no existe")
}

conseguirTipoSuscripcion ('free')
//Solo puedes tomar los cursos gratis//
