
const { MongoConnection } = require ('../lib/mongo');

//Collection
const COLLECTION = "clients"
const findUsers = () => new Promise(async (resolve,reject)=>{
    try{
   //inicilazo mongoClient para que me retorno la configuracion de la db
   const DB = await  MongoConnection();
   //obtenemos la collection
   const clients = DB.collection(COLLECTION)
   const clientsList = await clients.find({}).toArray()
   resolve(clientsList)
    } catch (error){
        reject(error);
    }
 



});
module.exports = {
    findUsers,
};