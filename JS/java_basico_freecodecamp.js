// este es un comentario
/* comentario de 
varias lineas*/

/* Tipos de Datos: undefined, null, boolean, string, symbol, number y object.*/

var miVariable = "freeCodeCamp";  // o let o const igual sirven como var con algunas diferencias
console.log(miVariable);

// ambos validos, a undefined.     = se llama operador de asignacion
var a;
var b = 2; 

// tambien se puede:
var a = 5;
b = a;

// al declarar y darle valor estamos "inicializando la variable"
var x;   //solo crear
var x=9; // crear e inicializar.

// JS es Case Sensitive y variables con Camel Case "miVariable"


var suma = 7 + 12;

// OPERADORES: +, -, *, /, %

// Incrementar valor de una variable
var numero = 1
numero = numero + 1;
numero++;
//incerementar en mas
a = a + 5;
a += 5;
//multiplicar y dividir
c = c * 2;
c *= 2;

//Variables con cadenas de caracteres
var nombre = "Alan";

/* Secuencias de escape
(codigo,resultado): \',comilla simple, \",comilla doble    \\,\   \n, salto linea*/

var nombreCompleto = "Alvaro " + "Cabreira";

var verbo = "programar";
var oracion = "estoy aprendiendo a " +  verbo + "con codeCamp"


var parteUno = "esta es la parte 1";
var parteDos = "esta es la parte 2";
parteUno += parteDos


var miCadena = "cadena"
miCadena.length
length(miCadena)

var palabra = "palabra"
palabra[0] // = p

// cadenas son inmutables. no puedo cambiar sus caracteres de 1
// no puedo definir palabra[0] = 1
// ultimo indice siempre es lenght-1

var miArreglo = ["Jhon", 24];
 
// arreglo anidado
var miArregloAnidado = [["Nora",97], ["Gino",96]];

// acceder a arreglos y arreglos multidimensionales
var miArreglo = [10,20,30];
miArreglo[0] ;//10;
miArreglo[1][2];

// Modificar elemento de arreglo.
var miArreglo = [10,20,30]
miArreglo[0] = 20; // se cambia el primero por 20.


     // METODOS:
//.push() : Agregar elemento al final del arreglo
var estaciones = ["invierno", "Otoño", "Primavera"];
estaciones.push("Verano");

//.pop() Remover el ultimo elemento
var estaciones = ["invierno", "Otoño", "Primavera"];
estacion = estaciones.pop(); // estacion = verano

// .shift() Remover primer elemento del arreglo
// .unshift() Agregar elemento al principio del arrelgo

function mostrarMensaje() {
    console.log("Hola, Mundo");
}
mostrarMensaje(); // hola mundo

// Argumentos
function sumar(a, b) {
    var suma = a+b;
    console.log("El resultado de " + a + "+" + b + " es" + suma);
}

// 2 tipos de variables> Globales y Locales. 
// Global se usa o accede en cualaquier lugar del programa pq se define en programa principal      
// Local se usa solo dentro de una funcion. se declara dentro de la funcion 


// retornar valor. y asignarlo
function sumar(a, b){
    return a+b;
}
var resultado = sumar(5, 3);
// en caso de no hacer return, "undefined" se retorna por defecto.

function proximoEnLaFila(arr,elemento){
    arr.push(elemento);
    return arr.shift();
}

// booleanos true y false
console,log(5==5); // true
console,log(5==6); // false
// no aplica para arreglos.

//Igualdad estricta>
console,log(5=="5"); // true
console,log(5==="5"); // false

// operador desigualdad !=  (estricta !==)

// Mayor que >  y mayor igual >=
4>5;   //true
"B">"A"; //true
"ACB">"ABC"; //true
"AB">"A"; //true

// operadores logicos AND, OR, NOT
// NOT negar el valor de verdad de expresion      !X   X true  !X false 

// Sentencias condicionales
if (/*Condicion*/) {
    /*Se ejecuta*/
}

if (true){
    console.log("La condicion es verdadera")
}
//La condicion es verdadera


// Else
if (estacion ="Verano") {
    console.log("Comenzo el verano");
} else {
    console.log("No comenzo el verano")
}

//else if
function clasificarValor(valor){
    if ( valor % 2 == 0) {
        console.log("Divisible entre 2.");
    } else if (valor % 3 == 0) {
        console.log("Divisible entre 3");
    } else {
        console.log("No divisible entre opciones")
    }
} 
// (puedo agregar varios else if)

function puntajeDeGolf(par, golpes){
    if (golpes == 1) {
        return "Hole in one";
    } else if (golpes <= par - 2) {
        return "Eagle";
    } else if (golpes == par - 1) {
        return "Birdie";
    } else if (golpes == par) {
        return "Par";
    } else if (golpes <= par +1) {
        return "Boogie";
    } 
}

//Sentencias Switch, condicional segun el valor que se ingrese
function clasificarValor(valor) {
    var respuesta;
    switch(valor) {
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gamma";
            break;
    }
    return respuesta;
}

//otro ejemplo, pueedo agregar sentencia predeterminada
var producto = "hamburguesa";

switch (producto) {
    case "pizza":
        console.log("La pizza basica cuesta 10 pesos");
        break;
    case "hamburguesa":
        console.log("La hamburguesa cuesta 8");
        break;
    default:
        console.log("No hay producto")
}

// Multiples casos
function clasificarValor(valor) {
    var respuesta;
    switch(valor) {
        case 1:
            respuesta = "bajo";
            break;
        case 2:
        case 3:
            respuesta = "intermedio";
            break;

        case 4:
        case 5:
            respuesta = "alto";
            break;
    }
    return respuesta;
}

// retornar booleanos
function esMenorQue(a, b) {
    return a<b;
}

// Conteo de cartas
var conteo = 0;

function contarCartas(carta) {
    var decision;
    switch(carta) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            conteo ++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
            conteo --;
            break;
    }
    if (conteo>0) {
        decision ="Apostar";
    }
    else {
        decision = "Esperar";
    }
    return conteo + "" + decision;
}

// Crear objetos. Permiten guardar conjunto de propiedades relacionada con sus valores
var miPerro = {
    "nombre": "Gino",
    "edad": 5,
    "peso": 6,
    "raza": "Beagle"
};
//Acceder a propiedades, Notacion de punto y notacion de corchetes
miPerro.nombre; // Gino
miPerro["nombre"] //Gino *Sirve para propiedades con espacios "esta propiedad"

// actualizar propiedades

var mochila = {
    "color": "azul",
    "tama;o": "mediano",
    "contenido": ["botella de agua", "cuaderno"]
};

mochila.color = "verde"; //re asigna valor a propiedad color
mochila.contenido.push("lapiz"); //agrego elemento al final de contenido

// Agregar propiedades

var curso = {
    "titulo" : "Aprende JavaScript desde Cero",
    "idioma": "Espa;ol",
    "duracion": 30
};

curso.vistas = 34500; // esto agregara propiedad vistas con ese valor a objeto.
curso["vistas"] = 34500;

delete curso.vistas; // Borrar una propiedad


//Objetos para busqueda 2 formas. *Segunda mas compacta (mejor)

function buscarElementoQuimico(simbolo) {
    var elementoQuimico = "";
    switch(simbolo) {
        case "Al":
             elementoQuimico = "Aluminio";
             break;
        case "S":
            elementoQuimico = "Azufre";
            break;
        case "CL":
            elementoQuimico = "Cloro";
            break;
        case "He":
            elementoQuimico = "Helio";
            break;          
    }
    return elementoQuimico
}

// Mejor
function buscarElementoQuimico(simbolo) {
    var simboloQuimico = {
        "Al": "Aluminio",
        "S": "Azufre",
        "CL": "Cloro",
        "He": "Helio"
    }; 
    return simboloQuimico[simbolo]; 
}

//Verificar propiedades
var miCuaderno = {
    color: "verde",
    "categoria" : 3, 
    "precio": 4.56
};

miCuaderno.hasOwnProperty("color");  //true
miCuaderno.hasOwnProperty("origen");  //false

//ejemplo como funcion de  usar hasOwnProperty con condicional
function verificarPropiedad(obj,propiedad) {
    if (obj.hasOwnProperty(propiedad)) {
        return "Propiedad: " + obj[propiedad]; // se que sera verdadera, por el if, asi que no sera undefined
    } else {
        return "El objeto no tiene esta propiedad";
    }
} 

verificarPropiedad(miCuaderno,"color")  //Propiedad: verde
verificarPropiedad(miCuaderno,"origen")  //el objeto no tiene esta Propiedad 



// Objetos Complejos. Distintos tipos de datos 

var ordenesDePizzas = [ //ejemplo arreglo de objetos. Formato muy comun y similar a json
    {
        'tipo': 'margarita',
        'tamano': 'individual',
        'precio': 5.67,
        'toppings': [
            "extra queso",
            "champinones",
            "pina"
        ],
        "paraLlevar" : true
    },
    {
        'tipo': 'cuatro quesos',
        'tamano': 'familiar',
        'precio': 18.34,
        'toppings': [
            "extra queso",
            "pimenton",
        ],
        "paraLlevar": false
    },
    {
        "tipo": "napolitana",
        'tamano': 'individual',
        'precio': 6.78,
        'toppings': [],
        "paraLlevar": true
    }
]
// Estamos trabajando un arreglo. Cada objeto tiene un lugar en el arreglo, luegoi cada objeto tiene su conjunto de propiedades y sus valores para cada prioridad
// Entre las propiedades, toppings tiene como valor un arreglo.

ordenesDePizzas[0]; // primer objeto
ordenesDePizzas[0].tipo; //margarita o ordenesDePizzas[0][tipo];
ordenesDePizzas[0].toppings;

// Objetos Anidados. Objetos dentro de objetos
var miReceta = {
    "descripcion": "mi postre favorito",
    "costo": 16.6,
    "ingredientes": { // Los valores de la propiedad Ingredientes son objetos
        "masa": { // a su vez, la propiedad masa tiene un objeto como su valor
            "harina": "100 grs",
            "sal": "1 cucharadita",
            "agua": "1 taza",
            },
        "cobertura": {
            "azucar": "120 grs",
            "chocolate": "4 cucharadas",
            "mantequilla": "200 grs"
        }
    }
}


miReceta.descripcion; //mi postre favorito
miReceta.ingredientes; // Arreglo de ingredientes

miReceta.ingredientes.masa; // arreglo de los ingredientes dentro de masa
//{harina:'100grs',  sal: '1 cucharadita', agua: '1 taza'}

miReceta.ingredientes.masa.harina; // 100 gr
miReceta.ingredientes.masa["harina"]; // identico. ventaja de este metodo es que podemos ingresar una variable. Y es oblogatoria cuando nombre de propiedad tiene espacios

// incluso puedo usar corchetes asi
miReceta.ingredientes['masa'].harina; // asi puedo asignar una variable en distintos niveles de anidacion

// JSON : JavaScript Object Notation



// Arreglos Anidados
var misPlantas = [
    {
        tipo: "flores",
        lista: [
            "rosas",
            "tulipanes",
            "dientes de leon"
        ]
    },
    {
        tipo: "arboles",
        lista: [
            "abeto",
            "pino",
            "abedul"
        ]
    },
];
var primeraFlor = misPlantas[0].lista[0]; //rosas
var primeraFlor = misPlantas[0]["lista"][0]; //rosas


var segundoArbol = misPlantas[1].lista[1]; // pino

//Mini proyecto, coleccion de discos. Existe objeto que representa parte de coleccion de albumes. Cada album tiene un id asociado a otras propiedades
// No todos los albumes tienen info completa

var coleccionDeDiscos = {
    7853: {
        tituloDelAlbum: "Bee Gees Greatest",
        artista: "Bee Gees",
        canciones: ["Stayin' Alive"]
    },
    5439: {
        tituloDelAlbum: "ABBA Gold",
    },
}

/*Define funcion actualizarDiscos que tome los siguientes parametros: 
  discos(objeto que representa la coleccion de discos,  id, propiedad ("artista" o "canciones")  y valor

Completar funcion con:
    1 Si "valor" es una cadena vacia, eliminar propiedad
    2 si "propiedad" es igual a la cadena de caracteres "canciones", pero el album no tiene una propiedad "canciones", crea arreglo vacio y agrega "valor" a ese arreglo
    3 Si "valor" no es una cadena vacia y "propiedad" no es igual a "canciones", asigna el valor del parametro "valor" a la propiedad. Si la propiedad no existe, debes crearla y asignar este valor
    4 Si valor no es una cadena vacia, y propiedad no es igual a canciones, asigna el valor de "valor" a propiedad. Si propiedad no existe, se crea y asigna el valor
*/

function actualizarDiscos(discos, id, propiedad, valor) {
    if (valor === "") {
        delete discos[id][propiedad];
    } else if (propiedad === "canciones") {
        discos[id][propiedad] = discos[id][propiedad] || []; // en este caso se usa || (or). Esto dice, toma el primer valor, pero si es undefined, toma el segundo.
        discos[id][propiedad].push(valor);                   // entonces si existe la propiedad, se le hara push. si no existe. se crea arreglo y se hace push
    } else {
        discos[id][propiedad] = valor; // si no existe se crea, si existe se actualiza. 
    }
}


// ciclo o bucle (loop): While o for
// while: sin numero especifico de iteracion, pero sabemos que condicion se tiene que cumplor para que se cumpla el proceso.
var i = 0;
while (i<= 3) {
    console.log("Hola, MNundo");
    i++;
}


var miArreglo = [];
var i= 0;

while (i<10) {
    miArreglo.push(i);
    i++;
}

var numeros = [2, 3, 4, 5, 6, 8, 9, 34];
while (numeros.length > 4) {
    numeros.pop();
}  // 2, 3, 4, 5

// Ciclo for.   Se actualiza automaticamente
var miArreglo = [];

for (var i = 0; i < 10; i++)  { // variable ; condicion ; aumento de la variable
    miArreglo.push(i);
} // de 0  a 9
// Ventajas: Se especifican todas las variables relevantes del ciclo en el mismo for.

// iterar sobre un arreglo con for
var miArreglo = [4, 6, 8, 2];
var total = 0;

for (var i = 0; i < miArreglo.length; i++) {  // si uso <= es lenght -1
    total += miArreglo[i];   //console.log dentro del ciclo para ver como funciona
}

// .toUpperCase() transforma a mayuscula

// ciclos for anidados.
var miArreglo = [[1,2,3], [4,5,6],[7,8,9]];

for (var i=0; i < miArreglo.length; i++) {
    var arregloAnidado = miArreglo[i]; //Arreglo
    for (var j = 0; j< arregloAnidado.length; j++) {
        arregloAnidado[j]; // Elemento
    }
}

// Ciclos do While

do {  // Me garantiza que al menos una vez entrare al ciclo
    console.log(x);
    x++;
} while (x < 10); 




//Mini proyecto, Buscar perfiles 
// funcion que permite buscar un contacto en una lista de contactos. Cada contacto un objeto. Los objetos estan dentro de un arreglo.

var contactos = [
    {
        "nombre" : "Nora",
        "apellido": "Nav",
        "numero": "0543236543",
        "gustos": ["Pizza", "Promgramación"]
    },

    {
        "nombre" : "Harry",
        "apellido": "Potter",
        "numero": "0994372684",
        "gustos": ["Hogwarts", "Magia"]
    },
    {
        "nombre" : "Sherlock",
        "apellido": "Holmes",
        "numero": "0487345643",
        "gustos": ["Casos interesantes", "Violín"]
    },
];

function buscarPerfil(nombre, propiedad) {  //Dar el valor de la propiedad, segun el nombre que se busque.
    for (var i = 0; i<contactos.length; i++) {
        if (contactos[i].nombre ===  nombre) {
            return contactos[i][propiedad]  || "La propiedad no existe."; //aqui no puedo usar nmotacion de punto porque es una propiedad. 
        } 
    }  
    return "El contacto no esta en la lista.";
}

//Numeros aleatorios
function generarFraccionAleatoria () {
    return Math.random(); // Aleatorio entre 0 y 1 (sin incluir 1)
}

var aleatorioEntre0y19 = Math.floor(Math.random()*20);  //floor: retornar el mayor entero menor o igual a su argumento

function generarEnteroAleatorio(limiteSuperior) {  //aleatorios con limite supeiror
    return Math.floor(Math.random() * limiteSuperior);
}

function rangoAleatorio(limiteInferior, limiteSuperior) {
    return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
}

// funcion parseint()  Convertir cadena de caracteres a numero. Decimal se trunca a parte entera
parseInt("6"); // 6
parseInt("6.3"); // 6
parseInt("abc"); // NaN  Not a Number

parseInt("110111", 2); // Segundo argumento indica que el primero esta en codigo binario.
parseInt("3E0A", 16); // Segundo argumento indica que el primero esta en codigo hexadecimal.



// Operador condicional: permite compactar condicional en 1 linea

function retornarMinimo(x, y) {
    if (x< y) {
        return x;
    } else {
        return y;
    }
}
// se puede reemplazar
function retornarMinimo(x, y) {
        return x< y ? x: y;  // si es verdadera, retorna el primero, si no, el segundo
}

console.log(a > b ? a + 2 : b * 3);  // a=5, b=9   27

// operador condicional multiple

function compararNumeros(a, b) {
    return a == b ? "a y b son iguales"  // se recomienda separar condiciones en distintas lineas
    : a > b ? "a es mayor que b" 
    : "b es mayor que a";
}



/* var vs let
var permite declarar la misma variable con valores distintos. 
Let no permite declarar la misma variable con valores distintos, pero se puede reasignar. */
var campista = "James"
var campista = "Jorge" // esto no da problema

let campista = "James"
let campista = "Jorge" //esto da error
campista = "Jorge"  // esto no da error

 // Ademas, let es mas restrictivo. Si uso var por ejemplo, dentro de un ciclo, solo existe dentro de este ciclo

 for (let i = 0; i < 3; i++) {
    console.log(i)
 }
 console.log(i) // error. Porque ir solo existe ene el ciclo. Esto no ocurre si utilizo var



 // declarar variable con const. Esta no permite asignar un nuevo valor una vez declarado. queda como read-only. (pero si puede cambiar) 
 // constante se escribie toda en mayusculas y separado por _

 const MI_ARREGLO = [1, 2, 3, 4];
 MI_ARREGLO = [3, 4, 5, 6]; // error
MI_ARREGLO[0] = 5;  //esto si se puede hacer

// crear un objeto inmutable
let colores = {
    "verde": "#10e04b",
    "azul": "1b50e0",
    "negro": "#000000",
    "blanco": "#ffffff"
};
Object.freeze(colores)  //previene modificacion de atributos y valores y no permite agregar propiedades.

colores.verde = "#345sg5"; //error
delete colores.verde; //error


// funciones flecha: funciones mas compactas, utilizadas para funciones anonimas (sin nombre)
const fecha = function { // function es anonima
    return new Date(); //trae fecha de hoy
};

// funcion flecha
const fecha = () => new Date();

// otro ejemplo
const sumarTres = function(x) {
    return x + 3;
}
const sumarTres = (x) => x + 3;
sumarTres(4) // 7

// otro ejemplo
const sumarTres = function(x) {
    return x + 3;
}
const sumarTres = (x) => x + 3;
sumarTres(4) // 7

// otro ejemplo
const concatenarArreglos = function(arr1, arr2) {
    return arr1.concat(arr2);
}
concatenarArreglos([1,2], [3,4,5]); // [1,2,3,4,5]
// funcion anterior es igual que:
const concatenarArreglos = (arr1, arr2) => arr1.concat(arr2)

// tambien se puede con funciones de  mas de 1 linea
const sumar = (a, b) => {
    let num = 6;
    return a + b + num;
};


// Valores por defecto para parametros. (por si se omiten)
const Incrementar = (num, valor = 1) => num + valor; //valor por defecto para valor es 1.


// Operador REST  permite pasar cualquier numero de argunmentos a funcion y agruparlos en arreglo. n parametros no sera fijo
function miFuncion(...args) {  // Se usan 3 puntos seguido de una palabra. no siempre tiene que ser "args", pero se suele usar
    console.log(args);
} 

miFuncion(1) // [1]
miFuncion(1,2,3) // [1,2,3]
miFuncion([1, 2, 3, 4], [4, 5, 6]) // [[1, 2, 3, 4], [4, 5, 6]]


function miFuncion(...args) {  // Se usan 3 puntos seguido de una palabra. no siempre tiene que ser "args", pero se suele usar. Se usa en parametros de funcion
    console.log(args.length);
} 
miFuncion([1, 2, 3, 4], [4, 5, 6]) // 2


// operador spread. Hace lo contrario. Descompone arreglo en sus elementos individuales
const numeros = [1,2,3];
function sumar(x, y, z) {
    return x + y + z;
}
// para sumar los 3 del arreglo
sumar(numeros[1], numeros[2], numeros[3])// en vez de escribir esto puedo:
sumar(...numeros); // se usa al llamar la funcion


//DESTRUCTURACION. Asignar prop de un objeto a variables
const usuario = {
    nombre: "Gino Smith",
    edad: 34
};

// antes definiamos variables en funcion de las propiedades asi
const nombre = usuario.nombre;
const edad = usuario.edad;

// ahora puedo
const {nombre, edad} = usuario;


// DESTRUCTURACION OBJETOS ANIDADOS
const usuario = {
    johnDoe: {
        edad: 27,
        correo: "JD@gmail.com"
    }
};
const {johnDoe: {edad, correo}} = usuario // Definir variables de las propiedades del objeto anidado.
 
