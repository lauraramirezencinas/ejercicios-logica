# ejercicios-logica

Excelente trabajo Lau con estos ejercicios!!

Te dejo algun feedback para que pruebes otros metodos:

La iteracion 1 y 2 la podemos resolver con reduce, no te parece?

`function greatestElement(elements) { return elements.reduce((accumulator, currentElem) => { return currentElem > accumulator ? currentElem : accumulator },0) }`

`function suma(elements) { return elements.reduce((accumulator, currentElem) => { return accumulator + currentElem },0) }`

Recorda siempre declarar tus variables

`function palindromo(palabraUser) {
    let newPalabra = palabraUser.split("").join()
    let palabraReverse = palabraUser.split("").reverse().join();
    if (newPalabra == palabraReverse) {
        resultado = true;
    } else {
        resultado = false;
    }
    return resultado;
}`

resultado no esta declarada, esto te va a crear una variable en global o un error en "use strict", no es lo que queres.

El if en esta funcion lo podemos obviar y devolver directamente `return newPalabra == palabraReverse`

Si te animas, con la iteracion de fibonacci busca una solucion recursiva

En la iteracion 7, para comparar de forma mas eficiente, te recomiendo hacer un objeto asi:

let morse = {
 a: ".-", 
 b: "-...", 
 c: "-.-.", 
 d: "-..",
 .....
}

buscar por key en un objeto es mas rapido que por indexOf en un array



