// ---------------------CLASE PADRE----------------
class Persona{
    // agregar constructor 
    constructor(nombre, apellido){
    // this.argumento = parametro 
        this._nombre = nombre;
        this._apellido = apellido;
    }
        // creamos metodo get  para nombre 
        get nombre(){
            return this._nombre;
        }
        // creamos metodo set para nombre 
        set nombre (nombre){
            this._nombre = nombre;
        }
        // creamos metodo get para apellido 
        get apellido(){
            return this._apellido;
        }
        // creamos metodo set para apellido 
        set apellido (apellido){
            this._apellido = apellido;
        }
        // agregando metodo para ser heredado por clase hija 
        nombreCompleto() {
            return this._nombre+ ' '+this._apellido;
        }
        // Agregando un metodo estatico se asocia con la clase mas no con obejtos 
        static saludar(){
            console.log("saludos desde el metodo estatic ");
        }

}

// ---------------------CLASE HIJA----------------

 
    class Empleado extends Persona{
        constructor(nombre, apellido,departamento){
            // con super se hace el llamado de atributos de la clase padre 
            super(nombre,apellido)
            this._departamento = departamento;
        }

        get departamento(){
            return this._departamento;
        }
        set departamento(departamento){
            this._departamento=departamento;
        }
        // -----------------------sobreescritura----------------------
        // OPCION 1

        /*nombreCompleto(){
            return this._nombre + ' '+ this._apellido + ' ' +this._departamento 
        }*/
        // OPCION 2
        nombreCompleto(){
            return super.nombreCompleto()+ ' '+ this._departament;
        }

    }

    // de la clase padre creamos persona1 

    let persona1 = new Persona("jorge", " benavides");
    console.log(persona1);
    
    // vamos a crear un objeto de la clase hija empleado

    let empleado1 = new Empleado("jorge", " benavides","tecnologia");
    console.log(empleado1);
    console.log(empleado1.nombre);
    console.log(empleado1.apellido);
    console.log(empleado1.departamento);
    // llamando metodo agreado por clase padre a clase hija 
    console.log(empleado1.nombreCompleto());
    // llamando metodo agreado por clase padre a clase hija son sobreescritura 
    console.log(empleado1.nombreCompleto());

    // -----------------CONCEPTO DE SOBREESCRITURA---------------- 
    // Modificar el comportamiento de un metodo de clase padre

    // -----------------LLAMANDO METODO ESTATICO SALUDAR ---------------- 
    // persona1.saludar(); no es posible llamar un metodo statico desde un objetos 
    Persona.saludar(); // solo funciona desde la clase 


