// METODO CALL PERMITE LLAMAR METDO DE UN OBJETO A OTRO OBJETO
// Definicion     
let persona1={
        nombre:"juan",
        apellido:"perez",
        nombreCompleto: function(titulo, tel) {
            return this.nombre +" "+ this.apellido+ " "+titulo+" "+tel
        }
    }

    let persona2={
        nombre:"carlos",
        apellido:"lara",
        
        
    }    

    console.log(persona1.nombreCompleto());
    //Uso de call para usar metodo persona1 con los datos de persona2 
    console.log(persona1.nombreCompleto.call(persona2, " ing","2645563"));
    // let persona1Array = Object.values(persona1)
    // console.log(persona1Array)
    
    // USO DE APPLY
    console.log(persona1.nombreCompleto.apply(persona2));

    