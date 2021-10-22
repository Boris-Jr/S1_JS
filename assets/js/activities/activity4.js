// 4 - ingresar uno de los 32 departamentos de colombia  en un prompt y decir cual es su respectiva capital en un alert de respuesta

const ex4 = document.getElementById("ex4");
const btnUser = document.getElementById("btnUser");

const validaciones = () => {
  let departament = prompt("Ingrese la palabra por favor");

  if (departament == null || departament == "") {
    return alert("Error, debe llenar los campos");
  }
  let dep = departament;
  departament = departament.toLowerCase();
  switch (departament) {
    case "amazonas":
      translator.innerHTML = `La capital de: <b>${dep}</b> es: <b>Leticia</b>`;
      break;
    case "antioquia":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es: <b>Medellín</b>`;
      break;
    case "arauca":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>Arauca</b>`;
      break;
    case "atlantico":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>Barranquilla</b>`;
      break;
    case "bogota":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>Bogotá</b>`;
      break;
    case "bolivar":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>Cartagena de Indias</b>`;
      break;
    case "boyaca":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>Tunja</b>`;
      break;
    case "caldas":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>Manizales</b>`;
      break;
    case "caqueta":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>Florencia</b>`;
      break;
    case "casanare":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>Yopal</b>`;
      break;
    case "cauca":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>Popayán</b>`;
      break;
    case "cesar":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>Valledupar</b>`;
      break;
    case "choco":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>Quibdó</b>`;
      break;
    case "cordoba":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>Montería</b>`;
      break;
    case "cundinamarca":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>Bogotá</b>`;
      break;
    case "guainia":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>Inírida</b>`;
      break;
    case "guaviare":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>San José del Guaviare	</b>`;
      break;
    case "huila":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>Neiva</b>`;
      break;
    case "la guajira":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>Riohacha</b>`;
      break;
    case "magdalena":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>Santa Marta</b>`;
      break;
    case "meta":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>Villavicencio</b>`;
      break;
    case "nariño":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>Pasto</b>`;
      break;
    case "norte de Santander":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>San José de Cúcuta</b>`;
      break;
    case "putumayo":
      translator.innerHTML = `La capital de:: <b>${dep}</b> es <b>Mocoa</b>`;
      break;
    case "quindio":
      translator.innerHTML = `La capital de: <b>${dep}</b> es <b>Armenia</b>`;
      break;
    case "risaralda":
      translator.innerHTML = `La capital de: <b>${dep}</b> es <b>Pereira</b>`;
      break;
    case "san andres y providencia":
      translator.innerHTML = `La capital de: <b>${dep}</b> es <b>San Andrés y Providencia</b>`;
      break;
    case "santander":
      translator.innerHTML = `La capital de: <b>${dep}</b> es <b>Bucaramanga</b>`;
      break;
    case "sucre":
      translator.innerHTML = `La capital de: <b>${dep}</b> es <b>Sincelejo</b>`;
      break;
    case "tolima":
      translator.innerHTML = `La capital de: <b>${dep}</b> es <b>Ibagué</b>`;
      break;
    case "valle del cauca":
      translator.innerHTML = `La capital de: <b>${dep}</b> es <b>Cali</b>`;
      break;
    case "caupes":
      translator.innerHTML = `La capital de: <b>${dep}</b> es <b>Mitú</b>`;
      break;
    case "vichada":
      translator.innerHTML = `La capital de: <b>${dep}</b> es <b>Puerto Carreño	</b>`;
      break;
    default:
      translator.innerHTML = `El departamento: <b>${dep}</b> NO se encuentra en nuestra base de datos, intente con otro`;
      break;
  }
};

btnUser.onclick = () => {
  validaciones();
};
