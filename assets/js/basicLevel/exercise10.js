//Variables globales
const btnUser = document.getElementById("btnUser");

//Funciones
const userData = () =>{
    let userName = prompt("Ingrese su nombre");
    let age = prompt("Ingrese su edad");
    //interpolación
    alert(`Su nombre es ${userName} y su edad ${age}`)
}

//Eventos
btnUser.onclick = function() {
    userData();
}