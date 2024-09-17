// Função para retornar um novo array com o primeiro e último número dividido por dois

function dividirPrimeiroUltimoPorDois(numeros){
    let primeiro = numeros[0]/2  // dividimos o primeiro array por Dois
    let ultimo = numeros[numeros.length-1]/2 // dividindo o último número por dois
    return[primeiro, ultimo]
}
// chamada 
let arrayNumeros = [9, 11, 15, 19, 21]
let resultado = dividirPrimeiroUltimoPorDois(arrayNumeros)
console.log("New Array", resultado)
