let numero = Number (prompt ("Ingrese el numero que quiere sumar o 0 para ver el resultado"))
let resultado = 0
while (numero != 0) {
    resultado += numero
    numero = Number (prompt ("Ingrese el numero que quiere sumar o 0 para ver el resultado"))
}
alert (`El resultado de la suma es ${resultado}`)