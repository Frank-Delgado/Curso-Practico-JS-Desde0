
condicionales:

var numero = 1;

switch (numero) {
    case 1:
    console.log("Soy un uno!");
        break;
    case 2:
        console.log("soy un dos!");
        break;
    case 1000:
        console.log("soy un mil!");
        break;
    default:
        console.log("No soy nada");
}


var piedra = "1";
var papel = "2";
var tijera = "3";

function resultado ( cpu,jugador){
    
    switch (true) {

    case cpu === "3" && jugador === "1":
    console.log ("ganaste");
    break;

    case cpu === "2" && jugador === "3":
    console.log ("ganaste");
    break;

    case cpu === "1" && jugador === "3":
    console.log ("ganaste");
    break;

    case cpu === jugador:
    console.log ("empate");
    break;

    default: 
    console.log ("perdiste");
}
}


//-------------------------------------------------------------------//

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertDuo":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

//Puedes tomar casi todos los cursos de Platzi durante un mes//



//---------------------------------------------------------------------


//Si deseamos Transformar esta condicional a if seria de esta manera://

tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}

else if (tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}

else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}

else if (tipoDeSuscripcion == "ExpertDuo") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//Puedes tomar casi todos los cursos de Platzi durante un mes


