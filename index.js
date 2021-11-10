//pequeño programa para carcular el area de un triangulo
var lado1 = prompt("Ingrese el valor del primer lado");
var lado2 = prompt("Ingrese el valor del segundo lado");
var lado3 = prompt("Ingrese el valor del tercer lado");
//se calcula el perimetro
var perimetro = lado1 + lado2 + lado3;
//se calcula el semiperimetro
var semiperimetro = perimetro/2;
//se calcula el area
var area = Math.sqrt(semiperimetro*(semiperimetro-lado1)*(semiperimetro-lado2)*(semiperimetro-lado3));
//se muestra el resultado
console.log("El area del triangulo es: " + area);

