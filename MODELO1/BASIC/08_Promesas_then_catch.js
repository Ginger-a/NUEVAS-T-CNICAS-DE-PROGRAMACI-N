/*
Promesas
 */
function promesa(bandera) {
    return new Promise((resolve,reject) => {
        if (bandera) {
setTimeout(() => {
resolve("Peticion resuelta");
}, 3000);
} else {
reject("La operacion fallo")
}
})
}
//promesa(false)
//.then((resultado) => {
  //  console.log("Respuesta positiva",resultado)

//})

//.catch((error) => {
  //  console.log("Error",error);
//})
 var segundaPromesa = (bandera) =>  new Promise((resolve, reject) => {
if(bandera){
    setTimeout(() => {
        resolve("Peticion resulta");
    }, 3000);
    
} else {
    setTimeout(() => {
        reject("La operacion fallo")
    }, 2000);
}
 })

 segundaPromesa(true)
 .then((respuesta)=>{
     console.log(respuesta)
 })
 .catch((error) => {
     console.log(error);
 })
 promesa(true) //peticion clientes
 .then((respuesta) => { //respuesta de lista de cliente
     console.log(respuesta)
     return segundaPromesa(true) //compras del cliuente
 })
 .then((respuesta) => { //respuesta de la segunda promesa
console.log(respuesta);
 })
 .catch ((error) =>{
     console.log(error)
 })
