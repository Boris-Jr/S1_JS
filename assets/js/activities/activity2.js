// 2 - Confeccionar un programa en JavaScript que defina e inicializa una variable de tipo cadena de caracteres donde almacenemos el nombre de un empleado y otra variable de tipo entera donde almacenar el sueldo. Imprimir cada variable en una línea distinta en pantalla.
const ex2 = document.getElementById("ex2");
const btnUser = document.getElementById("btnUser");

const validaciones = () => {
  let nameUser = prompt("Ingrese su nombre por favor");
  let salary = prompt("Ingrese su sueldo por favor");

  if (nameUser == null || nameUser == "" || salary == 0 || salary == "") {
    return alert("Error, debe llenar los campos");
  }
  ex2.innerHTML = `Nombre: ${nameUser} <br> Salario: ${salary}`;

  localStorage.setItem("ex2", `Nombre: ${nameUser} <br> Salario: ${salary}`)
};

if (localStorage.getItem("ex2")) {
    ex2.innerHTML = localStorage.getItem("ex2")
}

btnUser.onclick = () => {
  validaciones();
};
