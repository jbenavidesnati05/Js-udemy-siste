
class Persona{
    // agregar constructor 
    constructor(nombre, apellido){
    // this.argumento = parametro 
        this._nombre = nombre;
        this._apellido = apellido;
    }
    // creamos metodo get 
    get nombre(){
        return this._nombre;
    }
    // creamos metodo set
    set nombre (nombre){
        this._nombre = nombre;
    }
}
 
// crear objeto
let persona1 = new Persona("juan", "perez");
// Para el metodo set donde se quiere modificar el nombre 
persona1.nombre = "juan carlos"
console.log(persona1.nombre); 



;