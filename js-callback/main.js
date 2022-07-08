// _____________________________ejercicio 1_____________________________ 
console.log("----------ejercicio 1----------- ");
function primera(){
    console.log("funcion primera")
    };

function segunda(){
    console.log("funcion segunda")
    };

primera(segunda());

console.log(" ");


// _____________________________ejercicio 2_____________________________ 
console.log("----------ejercicio 2----------- ");

function callback(){
    console.log("yo soy un callback")
}

function mensaje(){

}
mensaje(callback());
// _____________________________ejercicio 3_____________________________ 
console.log(" ");
console.log("----------ejercicio 3----------- ");

function funcion1(){
    setTimeout(function(){console.log("mensaje 1")},3000)
}

function funcion2(){
    console.log("mensaje 2")
}

funcion1(funcion2());
// funcion2();





