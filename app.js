// inician preguntas

let diaDeLaSemana = prompt('¿Hola! - Qué día de la semana es hoy?'); // crea variable para guardar dias de la semana y lanza popup
if (diaDeLaSemana === 'Sábado' || diaDeLaSemana === 'Domingo') { // compara si es sábado o domingo
    alert('¡Que tenmgas un divertido fin de semana!');  // despliega alert con mensaje
} else {
    alert('¡Ten una increíble y productiva semana!'); // si es diferente a sábado o domingo lanza alert con mensaje
}


let numero = prompt('Escribe un número que sea positivo o negativo'); //crea variable para guardar dias número y lanza popup
if (numero > 0) {       // compara si es mayor a cero
    alert('Ese fue un +Número positivo+');  // despliega alert con mensaje
} else if (numero < 0) {  
    alert('Escribiste un -Número negativo-');   // si es diferente a sábado o domingo lanza alert con mensaje
} else {
    alert('El número es cero');   // si es diferente a sábado o domingo lanza alert con mensaje
}


let puntuacion = 105;   //crea variable e inicializa con 105
if (puntuacion >= 100) {    // compara si la varible es mayor o igual a 100
    console.log('¡Enhorabuena, has ganado!');       //envía dato a consola
} else {
    console.log('Inténtalo de nuevo para ganar.');      // si es menor a 100 despliega mensaje
}



 let saldoCuenta = 500; // Ejemplo de saldo
alert(`Tu saldo es de ${saldoCuenta}.`);    //encía mensaje de saldo



let nombre = prompt('Por favor, ingresa tu nombre');    //crea variable pide un nombre
alert(`¡Bienvenido, ${nombre}!`);   // despliega alert con mensaje con el nombre capturado