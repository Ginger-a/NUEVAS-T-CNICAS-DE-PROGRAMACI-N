//Como se hacia antes
function Rectangulo(base,altura){
this.base = base
this.altura = altura 
}
Rectangulo.prototype.calcularArea = function(){
return this.base * this.altura
}
var rectangulo = new Rectangulo(6,3)
//console.log(rectangulo.calcularArea());
//console.log(rectangulo.base)
 //declaracion de clases 
 class Rectangulo2 {
     constructor(base,altura){
         this.base = base 
         this.altura = altura
     }
     calcularArea(){
         return this.base * this.altura
     }
 }
 var rectangulo2 = new Rectangulo2(6,3)
 //console.log(rectangulo2.calcularArea())
 //clase persona
 //implementar getters,setter y realizar una implementacion
 //implementar metodos estaticos punto distancia
 //construir clase persona y estudiante,extender estudiante con persona
 /*
 DEBER
 */
//implementar getters,setter y realizar una implementacion
 //class persona{
//constructor(nombre,apellido,edad){
   //this.nombre=nombre;
   //this.apellido=apellido;
  // this.edad=edad;

//}
//get capacidades(){
    //return{
        //nombre: this.nombre,
      //   apellido: this.apellido,
    //      edad:  this.edad

  //  }
//}
//set capacidades(nuevaPersona){
    //this.nombre = nuevaPersona.nombre;
    //this.apellido = nuevaPersona.apellido;
  //  this.edad = nuevaPersona.edad;
//}
//}
//var Persona = new persona("Ginger","Muñoz",21);
//console.log(persona)
//console.log(persona.capacidades);
//persona.capacidades = {nombre: "Ginger",apellido: "Muñoz",edad: 21}
//console.log(persona.capacidades)
//implementar metodos estaticos punto distancia
class punto{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    static distanciaOrigen (a,b){
const dx = a.x - b.x;
const dy = a.y - b.y;
 return Math.sqrt (dx * dx+ dy * dy);
    }
   
}
const p = new Punto (10,5);
const punto = new Punto (11,4);

console.log(punto.distanciaOrigen(p,punto));
//construir clase persona y estudiante,extender estudiante con persona
class Personaa{
    constructor(nombre){
        this.nombre = nombre;
        this.apellido = apellido;
    }

}
console.log(Personaa);
 class estudiante extends Personaa{
     constructor(nombre,apellido,edad,correo){
         super(nombre);
        super(apellido);
        this.edad;
        this.correo;

     }
 }
 console.log(Personaa);
 var persona = new Persona("Ginger");
 var estudiante = new estudiantee("Ginger","Muñoz",21,"gingerchi2219@hotmail.com");