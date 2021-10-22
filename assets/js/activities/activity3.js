// 3 - Digitar alguna de estas palabras (casa, mesa, perro, gato) luego mostrar la palabra traducida en inglés. Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página. (Con Switch)

const translator = document.getElementById("translator");
const btnUser = document.getElementById("btnUser");

const validaciones = () => {
  let word = prompt("Ingrese la palabra por favor");

  if (word == null || word == "") {
    return alert("Error, debe llenar los campos");
  }
  word = word.toLowerCase();
  switch (word) {
    case "casa":
      translator.innerHTML = `Usted ingresó: <b>${word}</b> <br> En inglés: <b>house</b>`;
      break;
    case "mesa":
      translator.innerHTML = `Usted ingresó: <b>${word}</b> <br> En inglés: <b>desk</b>`;
      break;
    case "perro":
      translator.innerHTML = `Usted ingresó: <b>${word}</b> <br> En inglés: <b>dog</b>`;
      break;
    case "gato":
      translator.innerHTML = `Usted ingresó: <b>${word}</b> <br> En inglés: <b>cat</b>`;
      break;
    default:
      translator.innerHTML = `La palabra: <b>${word}</b> NO se encuentra en nuestra base de datos, intente con otra`;
      break;
  }
};

btnUser.onclick = () => {
  validaciones();
};
