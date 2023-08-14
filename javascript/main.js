/*
alert("Preguntas y respuestas!!");

let contador = 0;

let incognita = 3;

let respuesta = 0;

let valor = true;

// ************* PREGUNTA 1 ************


while (valor) {
  let pregunta1 = prompt(
    "Cual fue la temporada en la que mas goles hizo Lionel Messi? \n 1 - 2012 \n 2 - 2013 \n 3 - 2014 "
  );

  if (pregunta1 == 1) {
    alert("Respuesta correcta");
    contador++;
  } else {
    alert("Respuesta incorrecta");
  }

  // ************* PREGUNTA 2 ***************

  let pregunta2 = prompt(
    "En que año fue la primera vez que Argentina se consagro campeon mundial en futbol? \n 1 - 1978 \n 2 - 1982 \n 3 - 1986"
  );

  if (pregunta2 == 1) {
    alert("Respuesta correcta");
    contador++;
  } else {
    alert("Respuesta incorrecta");
  }

  // ************* PREGUNTA 3 ***************

  let pregunta3 = prompt(
    "Quien fue el ganador del ballon d'or en 1998?\n 1 - Ronaldinho\n 2 - Ronaldo Nazario\n 3 - Zinedine Zidane"
  );

  if (pregunta3 == 3) {
    alert("Respuesta correcta");
    contador++;
  } else alert("Respuesta incorrecta");

  // ********* PUNTAJE *******

  alert(`Tu puntaje fue ${contador} de 3`);


  let seguirJugando = prompt("Desea seguir jugando?\n 1 - Si\n 2 - No");

  if ((seguirJugando == 2)) {
    valor = false;
  }
  contador = 0;
}

*/


/********** ARRAY *************/


const equipos = [
  {
    nombre: "Boca Juniors", 
    ubicacion: "Buenos Aires, Argentina", 
    estadio: "La Bombonera", 
    titulos: 74
  },

  {
    nombre: "River Plate", 
    ubicacion: "Buenos Aires, Argentina", 
    estadio: "El Monumental", 
    titulos: 70
  },

  {
    nombre: "Independiente", 
    ubicacion: "Buenos Aires, Argentina", 
    estadio: "Libertadores de America", 
    titulos: 45
  },
  
  {
    nombre: "Racing", 
    ubicacion: "Buenos Aires, Argentina", 
    estadio: "El Cilindro", 
    titulos: 39
  },
  
  {
    nombre: "San Lorenzo", 
    ubicacion: "Buenos Aires, Argentina", 
    estadio: "El Gasometro", 
    titulos: 22
  },

  {
    nombre: "Rosario Central", 
    ubicacion: "Santa Fe, Argentina", 
    estadio: "El Gigante", 
    titulos: 11
  }
];

/*************** METODO FIND Y FILTER **************/

let nombre = prompt("Ingrese el nombre de un equipo de futbol argentino");


let equipo = equipos.find((item) => item.nombre == nombre);



if (equipo) {
  let mensaje = `
  Equipo: ${equipo.nombre}
  Ubicacion: ${equipo.ubicacion}
  Estadio: ${equipo.estadio}
  Titulos: ${equipo.titulos}
  `;
  alert(mensaje);
}else{
  alert("No se encontro ningun equipo con ese nombre. Proba usando mayusculas, ej: Boca Juniors");
}


let filtrado = prompt("Ingrese el numero minimo de titulos para ver los equipos");

let titulosFilter = equipos.filter(titulos => titulos.titulos > filtrado);

let filtrada = "";

for (let x in titulosFilter){
  filtrada = filtrada + " " + titulosFilter[x].nombre + " " +titulosFilter[x].titulos;
}

alert(filtrada);

