/* 
Variables de entorno

Desde la terminal u otra entrada
NOMBRE=julio node entorno.js

Para indicar varias variables de entorno al mismo tiempo
NOMBRE=Alejandro WEB=HMG.com node entorno.js

Por convencion las variables de entorno del sistema/node deben 
estar en mayusculas

si son dos palabras seria MI_WEB, con guion bajo para separar
*/
let nombre = process.env.NOMBRE || "sin nombre";
let web = process.env.WEB || "no tengo web";
console.log("Hola " + nombre);
console.log("Mi web es: " + web);
