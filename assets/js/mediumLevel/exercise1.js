//Decalara la variable
let registerDate = new Date();
//Se obtienen {Año, mes y día}
let year = registerDate.getFullYear();
let month = registerDate.getMonth();
let day = registerDate.getDate();
let hour = registerDate.getHours();
let minutes = registerDate.getMinutes();

console.log(day + "/" + month + "/" + year);
console.log(`${hour}/${minutes}`);