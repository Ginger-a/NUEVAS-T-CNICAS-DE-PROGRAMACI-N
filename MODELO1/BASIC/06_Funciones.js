/* Funciones declarativas*/
//retorno de valores
function saludar(){
    return "Hola soy Ginger";

}
//funciones void
function salular2(){
    console.log("Hola soy Paola");
}
//funcion con parametros
function SaludarConParametror(nombre,apellido){
    return `Hola soy ${nombre} ${apellido}`

}
//funciones con parametros por defento
function saludoConProfesion(nombre="Persona",profesion="Analista de sistemas"){
return `Hola ${nombre} mi profesion es ${profesion}`


}
//console.log(saludoConProfesion("Ginger"));
//console.log(saludarConParametros());

 //var resultado = saludar()
 //console.log(resultado);
 //console.log(salular());

 /*
 Funciones expresivas = funciones anonimas
 */

 var saludoConEdad = function (nombre,edad){
     return `Hola soy ${nombre} y tengo ${edad} año(s)`

 }
 //console.log(saludoConEdad("Ginger",21));
  /* 
  Aroow Functions - Funciones flecha
  */
 var saludoConApellido = (nombre,apellido) => 
     `Hola soy ${nombre} ${apellido}`
     //var saludoConApellido = (nombre,apellido) => {
    //console.log(`Hola soy ${nombre} ${apellido}`) 
//}
var suma =(num1,num2) => num1 + num2
//console.log(suma(2,3));
 //console.log(saludoConApellido("Ginger","Muñoz"));

 /*
 FUNCIONES COMO PARAMETROS DE OTRAS FUNCIONES
 */

 function saludoConFunciones(nombre,cb){
     return cb(nombre)

 }
 var miSaludo = saludoConFunciones("Ginger",(nombre) =>
    `Hola soy ${nombre}`)
 console.log(miSaludo2);
 //setTimeout(() => {
    // console.log("Hola Mundo");
 //}, 3000);

 //setInterval(() => {s
   //  console.log("Hola Mundo");
 //}, 2000);