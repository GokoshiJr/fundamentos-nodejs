const fs = require("fs");

let ruta = __dirname + "/nombres.txt";

function leoArchivo(ruta, callback) {
  fs.readFile(ruta, (err, data) => {
    if (err) throw err;
    callback(data.toString());
  });
}

function escriboArchivo(ruta, contenido, callback) {
  fs.writeFile(ruta, contenido, (err) => {
    if (err) throw err;
    callback("Se ha escrito correctamente");
  });
}

function borrarArchivo(ruta, callback) {
  fs.unlink(ruta, callback);
}

function main() {
  console.log("Inicio del proceso");

  escriboArchivo(ruta, "Julio", (finalizado) => {
    console.log(finalizado);
  });

  leoArchivo(ruta, (data) => {
    console.log("Nombres:", data);
  });

  borrarArchivo(ruta, console.log);

  console.log("Fin del proceso");
}

main();
