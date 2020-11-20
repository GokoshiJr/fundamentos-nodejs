function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Hola", nombre);
      resolve(nombre);
    }, 2000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hablando soy", nombre);
      // resolve(nombre);
      reject("No se lee el archivo");
    }, 2000);
  });
}

function adios(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("adios", nombre);
      resolve(nombre);
    }, 2000);
  });
}

// --

console.log("Iniciando el proceso");
hola("Julio")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .catch((err) => {
    console.error("Hubo un error");
    console.log(err);
  });
