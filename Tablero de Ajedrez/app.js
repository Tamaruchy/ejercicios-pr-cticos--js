//tamaño de cuadricula
var size = 8;

//Creando la cuadricula
var result = '';

for(var row = 1; row <= size; row++){
  for(var column = 1; column <= size; column++){
    if((column + row) % 2 === 0){
      result += ' ';
    } else {
      result += ' #';
    }
  }
result += '\n';
}
console.log(result);
