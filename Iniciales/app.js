//preguntando Nombre y Apellido
 var name = prompt("¿Cual es tu Nombre y Apellido");
//Obtener primera Inicial
var firstInitial =name.slice(0,1);
//Obteniendo Segunda Inicial
var secondInitialPosition =name.indexOf(" ") +1;
//Obteniedo Segunda inicial
var secondInitialPosition=name.slice(secondInitialPosition,secondInitialPosition+ 1);

console.log(firstInitial+secondInitialPosition);
//Mostrando resultados en la web
document.write("Tus Iniciales son  " + firstInitial.toUpperCase() + secondInitialPosition.toUpperCase());
