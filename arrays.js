var frutas = ["manzana", "platano", "cereza", "fresa"];

console.log (frutas);
"manzana", "platano", "cereza", "fresa"

console.log (frutas.length);
4

//se empieza a contar desde el 0 que seria manzana//
console.log(frutas[0]);
"manzana"

var nombres = ["Andres", "Ramiro", "Silvia"]

nombres[0] // "Andres"
nombres[1] // "Ramiro"
nombres[2] // "Silvia"
nombres[3] // undefined



var nombres = ["Andres", "Ramiro", "Silvia"]
// Accedemos y mutamos el segundo elemento
nombres[1] = "Platzi"

console.log(nombres) // ["Andres", "Platzi", "Silvia"]



// para agregar 1 elemento más:

var frutas = ["manzana", "platano", "cereza", "fresa"];

var MasFrutas = frutas.push("uvas");

(5) ['manzana', 'platano', 'cereza', 'fresa', 'uvas']


// para eliminar el ultimo elemento :

var frutas = ["manzana", "platano", "cereza", "fresa"];

var ultimo = frutas.pop("fresa");

frutas
(3) ['manzana', 'platano', 'cereza']


// nueva longitud poner nuevo elemento de primero:

var frutas = ["manzana", "platano", "cereza", "fresa"];

var nuevalongitud = frutas.unshift("cambur");

(5) ['cambur', 'manzana', 'platano', 'cereza', 'fresa']



// para borrar el primer elemento:

var frutas = ["manzana", "platano", "cereza", "fresa"];

var quitarprimero = frutas.shift();




//buscar index o elementos en el array en caso que sean muchos:

var frutas = ["manzana", "platano", "cereza", "fresa"];

var position = frutas.indexOf("fresa");

//position

3

//----------------------------------------------------------------------------------

//En este desafío vas a recibir un parámetro arraySecreto en la función solution. Debes retornar true si el primer elemento del arraySecreto es de tipo string y debes retornar false si es de cualquier otro tipo.

Input

solution(["Huevo", "Gallina", "Vaca"])
solution([1, "Gallina", "Vaca"])

Output

true
false


export function solution(arraySecreto) {
    // Tu código aquí 👈
    return (typeof arraySecreto[0] === "string" ? true : false);
  }



/*---------------------------------------------------------------------------*/

/* Métodos de recorridos de Arrays*/

var articulos = [
  {nombre : "Bici", costo : 3000},
  {nombre : "Tv", costo : 2500},
  {nombre : "Libro", costo :320},
  {nombre : "Celular", costo : 10000},
  {nombre : "Laptop", costo: 20000},
  {nombre : "Teclado", costo: 500},
  {nombre : "Audifonos", costo: 1700},
];

/* Si queremos filtrar ciertos articulos en especifico podemos utilizar el metodo "filter":*/

var articulosFiltrados = articulos.filter(function(articulo){
  return articulo.costo <= 500
});

articulosFiltrados
 
/*{nombre: 'Libro', costo: 320}
{nombre: 'Teclado', costo: 500}*/

/*-------------------------------------------------------------------------

/* Si queremos mostrar los articulos "nombre" usamos map": */

var nombreDeArticulos = articulos.map(function(articulo){
  return articulo.nombre 
});

nombreDeArticulos
(7) ['Bici', 'Tv', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos']

/*-------------------------------------------------------------------------

/* Si queremos filtrar 1 articulo especifico usamos find": */


var articulosFiltrados = articulos.find(function(articulo){
  return articulo.nombre === "Laptop"
});

articulosFiltrados
/*costo:20000 nombre:Laptop*/

/*-------------------------------------------------------------------------*/

articulos.forEach(function(articulo){
  console.log(articulo.nombre)
  });

Bici
Tv
Libro
Celular
Laptop
Teclado
Audifonos

/*-------------------------------------------------------------------------*/

/* validar si hay o no articulos con true o false:*/

var articulosBaratos = articulos.some(function(articulo){
  return articulo.costo <= 700;
  });

true


//----------------------------------------------------------------------//

/*Tienes un array de objetos que representan datos de personas con los siguientes atributos:

name: string
lastName: string
age: number

Tu reto es retornar un array de strings con solo los nombres, para solucionarlo 
vas a encontrar una función llamada llamada getNames que recibe un parámetro de entrada:

array: Un array de objetos.
Dentro del cuerpo de la función getNames debes escribir tu solución.

Ejemplo:

Input:
[
  {
    name: 'Nicolas',
    lastName: 'Molina',
    age: 28
  },
  {
    name: 'Valentina',
    lastName: 'Molina',
    age: 19
  },
  {
    name: 'Zulema',
    lastName: 'Vicente',
    age: 21
  },
]

Output:
['Nicolas', 'Valentina', 'Zulema']*/

export function getNames(array) {
  return array.map(item => item.name);
}





//------------------------------------------------------------//


/*Tienes un array de objetos que representan datos de productos con los siguientes atributos:

name
price
stock
Tu reto es agregar y calcular una nueva propiedad llamada "taxes", los impuestos 
deben ser del 19% con base al precio base y debes tener en cuenta que como 
resultado se debe dejar un valor entero, sin decimales.

Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de 
$1000 el resultado de los "taxes" será $190, o para un producto con precio 
de $656 el resultado de los "taxes" será $124.

Para solucionarlo vas a encontrar una función llamada addNewAttr que recibe 
un parámetro de entrada:

array: Un array de objetos.
Dentro del cuerpo de la función addNewAttr debes escribir tu solución.*/

Ejemplo:

Input:
[
  {
    name: "Product 1",
    price: 1000,
    stock: 10
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20
  }
]

Output:
[
  {
    name: "Product 1",
    price: 1000,
    stock: 10,
    taxes: 190
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20,
    taxes: 380
  }
]


 function addNewAttr(array) {
  return array.map((item) => {
    const copyItem = {...item};
    copyItem.taxes = Math.trunc(copyItem.price * 0.19)
    return copyItem;
  });
}




//---------------------------------------------------------------------/

//Para trabajar con funciones y arrays: 

function imprimirPrimerElementoArray(arr) {
  console.log(arr[0])
  }

imprimirPrimerElementoArray(["Frank","Juan","Maria"])

Frank

//-----------------------------------------------------------------------//

/*Crea una función que pueda recibir cualquier array como parámetro e imprima 
todos sus elementos uno por uno (no se vale imprimir el array completo).*/

function imprimirElementoPorElemento (arr) {
  for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  }
  }

  imprimirElementoPorElemento (["Frank","Juan","Maria"])  
  Frank
  Juan
  Maria
undefined

//----------------------------------------------------------------------------

/*Crea una función que pueda recibir cualquier objeto como parámetro e imprima 
todos sus elementos uno por uno (no se vale imprimir el objeto completo).*/

const obj = {
  nombre: "Saul",
  edad: 27,
  comidasFavoritas: ["Pizza","Carne asada","Pollo horneado"]
  };

  console.log(Object.values(obj))

  array (3)[ Saul,27, (3) ]
  /*(3)[
    Pizza
    Carne asada
    Pollo horneado]*/

    function imprimirElementoPorElementoObjeto (obj) {
      const arr = Object.values(obj);
      for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
      }
    }

    Saul
    27
    /*(3)[ Pizza,Carne asada,Pollo horneado ]*/


    //--------------------------------------------------------

    //unir un array con otro seria: 

    let arrayA = [1, 2, 3];
    let arrayB = [4, 5, 6];

    function mergeArrays(parametro1, parametro2) {
      return [...parametro1, ...parametro2]
   }

   mergeArrays(arrayA,arrayB)
   [ 1,2,3,4,5,6 ]

//---------------------------------------------------------------------


/*Para mostrar ciertos objetos especificos si cumplen o no cumplen con lo validado, 
en este caso le pedimos a la funcion que me valide "true" si tiene el objeto "vivo":*/

let arrayPastor = [
{nombre:"pastor",vivo:true},
{nombre:"kevin"}
];

function filterOrder(parametros) {
  return parametros.map((item)=>item?.vivo)
  }

filterOrder(arrayPastor)

(2) [true, undefined]

/*0: true
1: undefined*/


/*----------------------------------------------------------------------------------

Tienes un array de objetos que representan ordenes de compra con los siguientes atributos:

customerName: string
total: number
delivered: boolean

Tu reto es filtrar todas las órdenes de compra que cumplan con la condición de tener
 un total mayor o igual a 100 y además que el estado delivered sea "true".

Para solucionarlo vas a encontrar una función llamada filterOrders que
recibe un parámetro de entrada:

array: Un array de objetos
Dentro del cuerpo de la función filterOrders debes escribir tu solución.

Ejemplo:*/

Input:
[
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 300,
    delivered: true,
  }
]

Output:
[
  {
    customerName: "Nicolas",
    total: 100,
    delivered: true,
  },
  {
    customerName: "Santiago",
    total: 300,
    delivered: true,
  }
]


function filterOrders(array) {
  return array.filter((item) => item?.total >= 100 && item?.delivered)
}
