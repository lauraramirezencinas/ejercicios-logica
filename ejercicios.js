// 1 - Escriba una función que retorne el mayor elemento de un array de números
// No vale utilizar el método .sort()
function greatestElement(numbers) {
    let numeroMayor = 0;
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > numeroMayor) {
            numeroMayor = numbers[i];
        }
    }
    return numeroMayor;
}


let numeros = [10, 9, 5, 20, 15];
console.log("el elemento mas grande es: " + greatestElement(numeros));


// 2 - Escriba una función que calcule la suma de todos los elementos numéricos de un array
function suma(numbers) {
    let suma = 0;
    for (i = 0; i < numbers.length; i++) {
        suma += numbers[i]
    }
    return suma;

}
console.log("la suma es: " + suma(numeros));


// 3 - Escriba una función que retorne true si una String es un palíndromo


function palindromo(palabraUser) {
    let newPalabra = palabraUser.split("").join()
    let palabraReverse = palabraUser.split("").reverse().join();
    if (newPalabra == palabraReverse) {
        resultado = true;
    } else {
        resultado = false;
    }
    return resultado;
}

console.log(palindromo("casa"))

// 4 - Escriba una función que combine 2 listas alternando sus elementos.
// ej: [a,b,c], [1,2,3] → [a,1,b,2,c,3].
function listasAlternadas(lista1, lista2) {
    let nuevaLista = [];
    for (i = 0; i < lista1.length; i++) {
        nuevaLista.push(lista1[i]);
        nuevaLista.push(lista2[i])
    }
    return nuevaLista;
}

let list1 = ["a", "b", "c"];;
let list2 = [1, 2, 3];

console.log(listasAlternadas(list1, list2))


// 5 - Escribe una función que calcule la lista de los primeros 100 números Fibonacci 
// Los primeros números Fibonacci son 1 y 1. 
// El enésimo numero Fibonacci se calcula agregando el enésimo-1 con el enésimo-2
//  1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

function fibonacci(numero) {
    let serie = [1, 1];
    for (i = 2; i < numero; i++) {
        let resultado = serie[i - 1] + serie[i - 2];
        serie.push(resultado);
    }
    return serie;
}
console.log(fibonacci(100))

// 6 - Escribir función para tomar un array de Strings e imprimir, cada palabra en una línes
// dentro de un cuadro retangular. 
// Por ejemplo la lista ["Hello", "World", "in", "a", "frame"] debería salir así:
//
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

function rectangulo(lista) {
    let listaOrdenada = [...lista]
    listaOrdenada.sort((a, b) => b.length - a.length)
    let palabraMasLarga = listaOrdenada[0].length
    console.log("*".repeat(palabraMasLarga + 4))
    for (i = 0; i < lista.length; i++) {
        console.log("* " + lista[i] + " ".repeat(palabraMasLarga - lista[i].length) + " *");
    }
    console.log("*".repeat(palabraMasLarga + 4))
}

let palabras = ["Hellooooo", "World", "in", "a", "frame"];

console.log(rectangulo(palabras))

// 7 - Escribir función para converter un texto en código-morse y vice-versa
// ej: toMorseCode("SOS") debería ser retornar "...---..."
function codigoMorse(texto) {
    let newTexto = texto.toUpperCase().split("");
    let morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", ".-.-.-", "--..--", "---...", "..--..", ".----.", "-....-", "-..-.", ".--.-.", "-...-", ".-..-.", "-.-.--"];
    let alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", ":", "?", "'", "-", "/", "@", "=", "\"", "!"];
    let res = "";
    for (i = 0; i < newTexto.length; i++) {
        var letra = newTexto[i]
        let position = alfabeto.indexOf(letra);
        let textoMorse = morse[position];
        res += textoMorse;
    }
    return res
}

console.log(codigoMorse("hola"))
// 8 - A partir de 2 Strings, escribir un programa que encuentre la sequencia comun de caracteres más grande
// ej: subsequence("Hola soy una String", "Hola soy una otra String")
// debería retornr "Hola soy una "
// ojo que la palabra "String" también es una sequencia comun, bien como "una", "soy", la letra "a"...
// pero hay que retornar la string comun más grande posible

function sequenciaComun(texto1, texto2) {
    let textoComun = "";
    let largTexto1 = texto1.length;
    let largTexto2 = texto2.length;
    let textoMasCorto = "";
    if (largTexto1 < largTexto2) {
        textoMasCorto = largTexto1;
    } else {
        textoMasCorto = largTexto2;
    }
    for (let i = 0; i < textoMasCorto; i++) {
        if (texto1[i] === texto2[i]) {
            textoComun += texto1[i];
        }
        else {
            break;
        }
    }
    return textoComun;
}

let text1 = "Hola soy una String";
let text2 = "Hola soy una otra String";

console.log(sequenciaComun(text1, text2))

// 9 - If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
function countLetters(numeros) {
    let nuevoNumbero = numeros.replace(/\s/g, "");
    let numero = nuevoNumbero.replace(/-/g, "")
    return numero.length;
}

let number = "three hundred and forty-two";
console.log(countLetters(number))
// 10 - If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

function sum(numero) {
    let sumaTotal = 0;
    for (let i = 1; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sumaTotal += i
        }
    }
    return sumaTotal
}

console.log(sum(1000))