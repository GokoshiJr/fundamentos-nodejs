function hola(nombre, miCallback) {
  setTimeout(function () {
    miCallback(nombre);
  }, 1000);
}

function hablar(nombre) {
  setTimeout(() => {
    console.log("Hablando con", nombre);
  }, 1000);
}

function adios(nombre) {
  setTimeout(function () {
    console.log("Adios " + nombre);
  }, 1000);
}

/* 
  Usar recursividad para evitar el callback hell
  En caso de ser necesario usar callbacks anidados
*/

function conversacion(nombre, veces, callback) {
  if (veces === 0) {
    setTimeout(() => {
      console.log("Fin Proceso ");
    }, 3000);
  } else {
    conversacion(nombre, veces - 1, callback);
    callback(nombre);
  }
}

console.log("Inicio del proceso");
conversacion("Julio", 3, hablar);
