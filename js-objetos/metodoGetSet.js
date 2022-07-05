// creacion del objeto 

//  Metodo get ===> obtener 
//  Metodo set ===> modificar 
let persona={
    nombre : "juan",
    apellido: "perez",
    email :"jperez@gmail.com",
    edad: 28,
    idioma:"us",
    
    //METODOS=FUNCIONES A OBJETOS USANDO GET
    get nombreCompleto(){
        return this.nombre +' '+ this.apellido;
    },
    

    

    //USAR METODO GET PARA PASAR "us"  a mayusculas

    get lang(){
        return this.idioma.toUpperCase()
    },
    //USAR METODO SET PARA 

    set lang(lang){
        return this.idioma=lang.toUpperCase();
    }
}
console.log(persona.nombreCompleto);
console.log(persona.lang);
//lamando el metodo set pasando el argumento que va al parametro de lang
persona.lang = "col"
console.log(persona.lang);
//confirmamos si se aplico el metodo lang
console.log(persona.idioma);




