// ----------------SIN PARAMETRO----------- 
tiempo = true
function clima(){
    if(tiempo==true){
        console.log("Esta lloviendo")
        document.write("Esta lloviendo")
    }else{
        console.log("Esta haciendo buen clima")
        document.write("Esta haciendo buen clima")
    }
}
clima();
document.write("<br>")
// ----------------CON PARAMETRO----------- 
function aviso(estalloviendo){
    if(estalloviendo==true){
    console.log("Esta lloviendo")
    document.write("Esta lloviendo")

    }else{
    console.log("No esta lloviendo")
    document.write("No esta lloviendo")

    }
}
aviso(false);
document.write("<br>")

// ----------------TRES VARIABLES----------- 
// FORMA 1 
function calcular(x,y,z){
    operar=((x+y)*z);
    console.log(` la suma es:${operar}`);
    document.write(` la suma es:${operar}`);
}    
calcular(5,2,3);

document.write("<br>")
// FORMA 2 

function calcular2(a,b,c){
    resultado = ((a+b)*c);
    return resultado;
}
console.log(` la suma es ${calcular2(5,52,3)}`);
document.write(` la suma es ${calcular2(5,52,3)}`);

// -----------FUNCION CALCULADORA----------- 

function calculadora(operacion,x,y){
    if(operacion=='suma'){
        suma= x+y;
        return suma;
        }else if (operacion=="resta"){
        resta= x-y;
        return resta
        }else if (operacion=="multiplicacion"){
        multi= x*y;
        return multi;
        }else if(operacion=="division"){
        div=x/y;
        return div;
        }else if(operacion=="expo"){
            expo=x*y;
            return expo;
        }    
    else{
        console.log("operacion no definida")
    }
}
console.log(calculadora('resta',2,4))
