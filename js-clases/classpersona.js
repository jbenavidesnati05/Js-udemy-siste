// ________________CLASE PADRE____________  
class Padre{
    constructor(nombre,apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
}
let Persona1 = new Padre("Jorge","Benavides")

console.log(Persona1._nombre+" "+ Persona1._apellido);


// ________________CLASE HIJA____________  

class Hija extends Padre{
    constructor(nombre,apellido,edad){
     super(nombre,apellido)
     this._edad =edad;
    }
}

let Hija1 = new Hija("anita","coral",13)
console.log(Hija1._nombre+" "+ Hija1._apellido+ " es hija de " +Persona1._nombre+ " y tiene "+ Hija1._edad+ " años");

// ________________CLASE HIJO____________  
class Hijo extends Padre{
    constructor(nombre,apellido,apodo){
        super(nombre,apellido)
        this._apodo= apodo;
    }
}
let Hijo1 = new Hijo("juan", "ibañez","cuchi")
console.log(Hijo1._nombre, Hija1._apellido,Hijo1._apodo);