var miAuto = {
    marca : "toyota",
    modelo : "Corolla",
    Annio : 2020
};

miAuto
/*{marca: 'toyota', modelo: 'Corolla', Annio: 2020}*/

miAuto.marca
'toyota'



/*Ahora si quiero agregar una funcion sería de esta manera: */

var miAuto = {
    marca : "toyota",
    modelo : "Corolla",
    Annio : 2020,
    detalleDelAuto : function () {
        console.log (`Auto ${this.marca} ${this.modelo} ${this.Annio}`);
    }
};

miAuto.detalleDelAuto();
/*Auto toyota Corolla 2020*/

/* otra forma de agregar objetos es con una función:*/

function auto (marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", "2020");

autoNuevo
/*auto {marca: 'Tesla', modelo: 'Model 3', annio: '2020'}

var autoNuevo2 = new auto("Tesla", "Model X", "2018");
var autoNuevo3 = new auto("Toyota", "Corolla" ,"2020");

auto{marca: 'Tesla', modelo: 'Model X', annio: '2018'}
autoNuevo3
auto{marca: 'Toyota', modelo: 'Corolla', annio: '2020'}*/


