//traemos el paquete
const { Router } = require('express');
//Incializamos Router
const router = Router()
//creacion de los endpoint
router.get("/", (req,res) => {
  res.send("Hola mundo con ExpressJs")
})
.get("/saludo", (req,res)  => {
  const { query:{nombre,apellido}} =req;
  res.json({
    saludo: `Hola soy ${nombre}  ${apellido}`,
  });
}).get('/saludo/:nombre',(req, res) =>{
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
