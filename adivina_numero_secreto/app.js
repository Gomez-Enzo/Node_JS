const readlineSync = require('readline-sync');

const{generarNumeroAleatorio, verificarAdivinanza} = require('./adivinanza');

const obtenerNumeroUsuario = () => {
    return readlineSync.question('Ingrese un Numero: ');
}

const juegoAdivinanza = () => {
const numeroSecreto = generarNumeroAleatorio();
let numeroAdivinado = 0;
console.log('Bienvenido a Adivina el numero secreto!');
console.log('Intenta adivinal el numero un numero del 1 al 100.\n');

    while(numeroAdivinado != numeroSecreto){
        numeroAdivinado = obtenerNumeroUsuario();
        verificarAdivinanza(numeroSecreto, numeroAdivinado);
    }
};

juegoAdivinanza();
