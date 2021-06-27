const express = require('express');
//genero una aplicacion expres
const app = express()
const {RouterIndex} = require('./routes/index');
app.use("/", RouterIndex)
const {RouterDeber} = require('./routes/Deber')
app.use("/deber-video",RouterDeber)

//app.use("/user", RouterIndex)
//app.use("/user/data",RouterIndex)
/*
"/" + "/" = "//" => "/"
"/" + "/saludo" = "//saludo" => "/saludo"
"/" + "/saludo/nombre" = "//saludo/: => "/saludo/:nombre
"/user" + "/saludo" = "/user/saludo"
"/user/data" + "/saludo" = "/user/data/saludo"
*/
app.listen(3000, () =>{
  console.log("Servidor escuchando en http://localhost:3000"); 
});