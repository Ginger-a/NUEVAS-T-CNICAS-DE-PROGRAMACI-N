const {Router}=require('express')
const router = Router()
const datos = require('../Data.json')
const modificarlista = datos.map((persona) =>{
persona.first_name = persona.first_name.toUpperCase()
persona.last_name=persona.last_name.toUpperCase()
return persona
})

router.get('/users',(req,res)=>{
    const {query:{id}} = req
    if(id!=null){
    var  filtroId = modificarlista.filter((persona) => persona
    .id===parseInt(id,10) )
    res.send(filtroId)
    }else{
        res.send(modificarlista)
    }
    })
    .get("/users/:apellido",(req,res) =>{
        const {params:{apellido}} =req
        var filtroapellido = modificarlista.filter((persona) =>
        persona.last_name===apellido)
        if (filtroapellido[0]!= undefined){
            const email=filtroapellido.map((ape) =>{
                delete ape.last_name
                delete ape.id
                delete ape.first_name
                return ape
            })

            res.send(email)
        }else{
            res.json({
                ms:"El apellido "+apellido+" no exsiste",
                body: []
            })

        }
    })
   
 
    module.exports.RouterDeber = router
