// Arrays
// Lista vacía
let people = [];
// Lista con datos
let animals =[
    "perro",
    "gato",
    "lobo",
    "serpiente",
    "escorpión",
    "conejo"
];

// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }

// for (const an in animals) {
//     console.log(animals[an]);
// }

animals.push("Elefante"); //Se agrega un elemento al final del arreglo
animals.unshift("León"); //Se agrega un elemento al inicio del arreglo
animals.splice(5,1); //Se elimina lo que hay en la posición 5 splice(posicion_a_eliminar, a_partir_de_la_posicion_eliminar...)
n
animals.forEach(an => {
console.log(an);
});
