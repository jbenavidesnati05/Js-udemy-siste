
let numero =1;
let numeroTexto= 'valor desconocido';

switch(numero){
    case 1:
        numeroTexto = 'numero 1';
    break;
    case 2:
        numeroTexto = 'numero 2';
    break;
    case 3:
        numeroTexto = 'numero 3';
    break;
    default:
        numeroTexto = 'error';
    break;
    }

    console.log(numeroTexto);


    let mes =11;
    let estacion= 'estacion desconocido';
    
    switch(mes){
        case 1: case 2: case 12:
            estacion = 'invierno';
        break;
        case 3: case 4: case 5:
            estacion = 'primavera';
        break;
        case 6: case 7: case 8: 
            estacion = 'verano';
        break;
        case 9: case 10: case 11: 
            estacion = 'otoño';
        break;
        default:
            estacion = 'error';
        break;
        }
    
        console.log(estacion);
    
    