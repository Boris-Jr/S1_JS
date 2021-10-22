// Guardar los sgts datos del usuario: {nombre, apellido, edad, teléfono, celular y dirección}

const dataUser = document.getElementById("dataUser");
const btnUser = document.getElementById("btnUser");

const insertData = () => {
    let nameUser = prompt("Ingrese su apellido por favor");
    let lastNameUser = prompt("Ingrese su apellido por favor");
    let age = prompt("Ingrese su edad por favor");
    let phone = prompt("Ingrese su teléfono por favor");
    let address = prompt("Ingrese su dirección por favor");

    dataUser.innerHTML = `Nombre: ${nameUser} <br> Apellido: ${lastNameUser}<br> Edad: ${age} <br>Teléfono: ${phone} <br>Direccion: ${address}`;

    localStorage.setItem("dataUser", `Nombre: ${nameUser} <br> Apellido: ${lastNameUser}<br> Edad: ${age} <br>Teléfono: ${phone} <br>Direccion: ${address}`);
}

if (localStorage.getItem("dataUser")) {
    dataUser.innerHTML = localStorage.getItem("dataUser");
}



//Evento
btnUser.onclick = () => {
    insertData();
}