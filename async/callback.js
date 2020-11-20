function hola(nombre, miCallback) {
  setTimeout(function () {
    miCallback(nombre);
  }, 3000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log("Adios " + nombre);
  }, 1000);
}

console.log("Iniciando proceso");

// nos aseguramos de que un callback se ejecute despues de otro
hola("Julio", function (nombre) {
  console.log("Hola " + nombre);
  adios(nombre, function () {
    console.log("Terminando proceso");
  });
});

// no hay orden
/* hola("Julio", function () { })
adios("Julio", function () { }) */
