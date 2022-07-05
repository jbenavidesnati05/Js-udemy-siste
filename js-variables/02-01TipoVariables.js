
// TIPOS DE DATOS 
//creando un objeto 

var objeto = {
    nombre:"juan",
    apellido:"Perez",
    telefono:"124813"
}
console.log(objeto);

// las variables son dinamicas cambian si se asignan despues 

console.log(typeof objeto)


//Tipo de dato booleano 

var bandera=true
console.log(bandera);
console.log( typeof bandera);

//Tipo de dato funcion 

function mifuncion(){
    console.log(typeof mifuncion)
}
mifuncion();

//tipo de clase es un funcion 
class persona{
    constructor(nombre,apellido){
    this.nombre;
    this.apellido;
    }    
}
console.log(persona);


// null es ausencia de valor 
