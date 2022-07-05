// funcion constructor de tipo persona 
function Persona(nombre,apellido,email){
    //operador this ====> indica el nombre de la propiedad 

    //propiedad = parametro 
    this.nombre= nombre;
    this.apellido= apellido;
    this.email= email;
}

// creando un prototipo para todas las personas 

Persona.prototype.empresa = "sistecredito"
// creamos objetos de tipo persona 

//OBJETO PADRE
let padre = new Persona('juan', "perez","jperez@gmail.com");
// mandamos a imprimir el obejeto padre 
console.log(padre)
//llamamos el prototypo
console.log(padre.empresa)



//OBJETO MADRE
let madre = new Persona('maria', "pinzon","mpinzon@gmail.com");
// mandamos a imprimir el obejeto padre 
console.log(madre)
//llamamos el prototypo
console.log(madre.empresa)

// CAMBIOS OBJETO PADRE

padre.nombre = "antony"
padre.apellido = "mark"
padre.nombre = "antony"
console.log(padre)

// OTRAS FORMAS DE CREAR OBJETOS

//-------------------1--------------------
// opcion 1 
var miObejto= new Object();
// opcion 2 
var miObejto2= {};


