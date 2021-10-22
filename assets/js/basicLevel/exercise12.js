let userName = prompt("Ingrese su nombre");
let age = prompt("Ingrese su edad");

switch (age) {
    case 18:
        alert("Tienes permisos ver peliculas violentas");
        break;
    default:
        alert("No tienes permiso para ver este catalogo");
        break;
}