// desafío 1 

alert('¡Bienvenido a nuestro sitio web!');      // lanza mensaje de alerta
let nombre = "Lua";     //crea variable y asigna valor caracrteres
let edad = 25;      //crea variable y asigna valor de 25
let numeroDeVentas = 50;        //crea variable y asigna valor de 50
let saldoDisponible = 1000;     //crea variable y asigna valor de 1000

// alert('¡Error! Completa todos los campos');     //lanza mensaje de error

let mensajeDeError = '¡Error! Completa todos los campos';   ////crea variable y asigna valor texto

alert(mensajeDeError);      //lanza mensaje de alerta
nombre = prompt('Escribe tu nombre');   //asigna valor a variable con prompr del usuario
edad = prompt('Escribe tu edad');       // asigna valor a variable conpropmt del usuario

if (edad >= 18) {       //compara que variable sea mayor o igual a 18
    alert(nombre + ' ¡Puedes obtener tu licencia de conducir!');    //si es verdadero lanza mensaje de alerta positivo
}
else { 
    alert(nombre + ' ¡No puedes obtener tu licencia de conducir!');     //si es falso lanza mensaje de alerta negativo
}