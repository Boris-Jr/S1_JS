//Ciclo for
const btnUser = document.getElementById("btnUser");
const exm2 = document.getElementById("exm2");

//Funcion
const spam = () => {
  for (let i = 1; i <= 3; i++) {
    // exm2.innerHTML = (`<span>${i} agua</span>`);
    
  }
};

//Evento
btnUser.onclick = () => {
  spam();
};
