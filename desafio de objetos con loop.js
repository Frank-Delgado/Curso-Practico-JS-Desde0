var marcasCarros = ["Tesla","Ferrari","Audi", 
                    "Lamborgini","Hyundai","Ford",
                    "Chevrolet","Porsche","Jaguar",
                    "Toyota","Subaru","Mitsubishi"];


var modeloCarros = ["Model S", "Enzo", "A1","Diablo", 
                    "Getz", "Fiesta", "Aveo","911 turbo",
                    "E-Pace", "Corolla", "Outback","Lancer"];


var annioCarros = ["2012", "2004", "2010","2001","2007","2005",
                   "2012","1995","2014","2018","2006","2009"];

var colorCarros = ["Azul","Rojo","Blanco","Amarillo","Negro","Verde",
                   "Marrón","Salmon","Vinotinto","Beige","Rosa","Gris"];

            


function auto (marca, modelo, annio, color) {
    this.marcasCarros = marca;
    this.modeloCarros = modelo;
    this.annioCarros = annio;
    this.colorCarros = color;
}

for ( i = 0; i < marcasCarros.length && i < modeloCarros.length &&
      i < annioCarros.length && i < colorCarros.length; i++) {
        var autoNuevo = new auto(marcasCarros[i], modeloCarros[i], annioCarros[i], colorCarros[i]);
        console.log(autoNuevo);
      }

/*------------------------------------------------------------------------------------------*/

function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];

  for(let i = 0 ; i < 30 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
  }


  /*--------------------------------------------------------------------*/

//RETO

//Paso 1: Creamos una lista vacía de autos
var listaAutos = [];

//Paso 2: Creamos la función constructora
function auto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
};

//Paso 3: Creamos una función que agregue un auto nuevo a la lista
function agregarAuto(marca, modelo, anio){
    var nuevoAuto = new auto(marca, modelo, anio);
    listaAutos.push(nuevoAuto);
};

//Paso 4: Creamos una función para que el usuario agregue un nuevo carro con sus parámetros
function registrarAutoNuevo(){
    var marca = prompt("Ingresa la marca: ");
    var modelo = prompt("Ingresa el modelo: ");
    var anio = prompt("Ingresa el año: ");
    agregarAuto(marca, modelo, anio);
    console.log("¡Agregaste tu nuevo carro con éxito!");
};

//Paso 5: Mostramos el arreglo actualizado
listaAutos;