//pequeño programa para carcular el area de un triangulo
var lado1 = prompt("Ingrese el valor del primer lado");
var lado2 = prompt("Ingrese el valor del segundo lado");
var lado3 = prompt("Ingrese el valor del tercer lado");

var perimetro = lado1 + lado2 + lado3;
console.log("El perimetro del triangulo es: " + perimetro);
var semiperimetro = perimetro/2;

var area = Math.sqrt(semiperimetro*(semiperimetro-lado1)*(semiperimetro-lado2)*(semiperimetro-lado3));

//se muestra el resultado
console.log("El area del triangulo es: " + area);
>>>>>>> rama2

