async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Hola", nombre);
      resolve(nombre);
    }, 2000);
  });
}

async function hablar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hablando...");
      resolve();
    }, 2000);
  });
}

async function adios(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("adios", nombre);
      resolve(nombre);
    }, 2000);
  });
}

async function main() {
  let nombre = await hola("Julio");
  await hablar();
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
}

console.log("Iniciando Proceso");
main();
console.log("Terminando Proceso");
