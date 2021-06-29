//traemos el paquete
const { Router } = require('express');
//Incializamos Router
const router = Router()
const {DataValidator} = require('../middlewares/DataValidator')
const {user} = require("../lib/Schema/User");
//creacion de los endpoint
router.get("/", (req,res) => {
  res.send("Hola mundo con ExpressJS");
})
.get("/saludo", DataValidator("query",user),(req,res)  => {
  const {
    query: { nombre, apellido },
} = req;
res.json({
    saludo: "mundo",
    nombre: nombre,
    apellido: apellido,
    
});
})
.get('/saludo/:nombre',(req, res) =>{
  const {params: {nombre}} = req;
    res.json({
    nombre: nombre
    });
  });

//Exportamos las rutas
module.exports.RouterIndex = router
//module = {
  //  exports:{
    //    RouterIndex: router
    //}
//}
