//Lógica de cálculadora
const numerOne = document.getElementById("numerOne");
const numberTwo = document.getElementById("numberTwo");
const btnCalcul = document.getElementById("btnCalcul");

//Función
const resultCalc = () =>{
    let sum = numerOne + numberTwo;
}


//event
btnCalcul.onclick = () => {
    resultCalc();
}