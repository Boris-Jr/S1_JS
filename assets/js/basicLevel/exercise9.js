//DOM {Document Object Model}
// Obtenemos el valor botón del html
const btnUser = document.getElementById("btnUser");

const userData = () => {
    alert('Esta es una prueba');
}

// Evento que se acciona al dar click
btnUser.onclick = function() {
    userData();
}