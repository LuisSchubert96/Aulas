nome1 = "Luis"                      // Variaveis globais  ( Escopo)
nome2 = "Pamela"
nome3 = "Rodrigo"
nome4 = "Kaue"

function chamarNome(){
    console.log("Olá!", nome1 )      // Acessa a variavel global
    console.log("Olá!", nome2 )
    console.log("Olá!", nome3 )
    console.log("Olá!", nome4 )
}
chamarNome()



function suadacao(nome){
    console.log(`Olá ${nome}`)
}
suadacao("Luis")
suadacao("Pamela")
suadacao("Henrique")