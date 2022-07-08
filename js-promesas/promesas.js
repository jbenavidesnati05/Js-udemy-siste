
let miPromesa = new Promise((resolver,rechazar)=>{
    let expresion = true;
    if(expresion){
        resolver("Resolvio correcto");

    }else{
        rechazar("ocurrio un error")
    }
});
// _____________________FORMA 1_______________________ 
// miPromesa.then(
//     valor=> console.log(valor),
//     error=> console.log(error)
//     );

// _____________________FORMA 2_______________________ 
// miPromesa
// .then(valor=>console.log(valor))
// .catch(error=>console.log(error));

// _____________________con promesa y setTimeout_______________________ 

// let promesa = new Promise((resolver)=>{
// setTimeout(()=> resolver("saludo con promesa y setTimeout"),3000);
// });

// promesa.then(valor=>console.log(valor));