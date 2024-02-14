let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

   
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }   else {
          if (numeroDeUsuario > numeroSecreto) {
             asignarTextoElemento('p', 'el numero secreto es menor')
          } else {asignarTextoElemento ('p', 'El numero secreto es mayor')
        }
         intentos++;
         limpiarCaja();
    }
    return;

}

function limpiarCaja (){
    document.querySelector('#valorUsuario').value = '';
   
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si el numero generado esta en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'juego del numero secreto¡');
    asignarTextoElemento('p', `indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();
