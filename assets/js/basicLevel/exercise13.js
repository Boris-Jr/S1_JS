const btnUser = document.getElementById("btnUser");
const welcome = document.getElementById("welcome");

//Funcion
const userData = () => {
    let userName =  prompt("Ingrese su nombre por favor");
    welcome.innerHTML = "Bienvenido/a "+userName;
}



//Evento
btnUser.onclick = () => {
    userData();
}