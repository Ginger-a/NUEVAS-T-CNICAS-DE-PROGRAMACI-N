const express = require('express');
//genero una aplicacion expres
const app = express()
//endpoint
app.get('/',(req, res) =>{
res.send("Hola mundo con ExpressJs")

})
app.listen(3000, () =>{
  console.log("Servidor escuchando en http://localhost:3000"); 
})