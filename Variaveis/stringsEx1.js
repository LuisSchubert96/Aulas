nome = "Luis"
corFavorita = "Azul"
console.log("A cor favorita do",nome,"é",corFavorita)
console.log(`A cor favorita do ${nome} é ${corFavorita}`)

// aqui conta o numero de caracteres
const nome1 = "Luis Henrique"
console.log(nome1.length)

// esse metodo tranforma todas as letras em minusculas
const frase = "TUDO EM MAIÚSCULO"
const fraseMinuscula = frase.toLowerCase()
console.log(fraseMinuscula)

// esse metodo tranforma todas as letras em maiusculo
const frase1 = "tudo em minusculo"
const fraseMaiuscula = frase.toUpperCase()
console.log(fraseMaiuscula)

// esse metodo retira os espaços existentes
const frase2 = "    Aqui Tem Vários Espaços     "
console.log(frase2.trim())

//esse metodo determina se um conjunto de caracteres pode ser encontrad dentro de outra string
const frase3 = "Eu joguei bola"
console.log(frase3.includes("bola"))
console.log(frase3.includes("volei"))