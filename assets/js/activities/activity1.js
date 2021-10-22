// Guardar los siguientes datos del usuario
/**
 * Nombre:
 * Apellido:
 * Edad:
 * Telefono:
 * Celular:
 * Dirección:
 */
// y hacer que se guarden en local storage y aparezcan de nuevo cada que la página se refresque
const dataUser = document.getElementById("dataUser");
const btnUser = document.getElementById("btnUser");

const insertData = () => {
  let nameUser = prompt("Ingrese su nombre por favor");
  let lastNameUser = prompt("Ingrese su apellido por favor");
  let age = prompt("Ingrese su edad por favor");
  let phone = prompt("Ingrese su teléfono por favor");
  let address = prompt("Ingrese su dirección por favor");

  if (
    nameUser == null ||
    nameUser == "" ||
    lastNameUser == null ||
    lastNameUser == "" ||
    age == null ||
    age == "" ||
    phone == null ||
    phone == "" ||
    address == null ||
    address == ""
  ) {
    return alert("Error, debe llenar los campos");
  }

  dataUser.innerHTML = `Nombre: ${nameUser} <br> Apellido: ${lastNameUser}<br> Edad: ${age} <br>Teléfono: ${phone} <br>Direccion: ${address}`;

  localStorage.setItem(
    "dataUser",
    `Nombre: ${nameUser} <br> Apellido: ${lastNameUser}<br> Edad: ${age} <br>Teléfono: ${phone} <br>Direccion: ${address}`
  );
};

if (localStorage.getItem("dataUser")) {
  dataUser.innerHTML = localStorage.getItem("dataUser");
}

//Evento
btnUser.onclick = () => {
  insertData();
};
