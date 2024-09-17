let nota1 = 8.0
let nota2 = 7.0
let nota3 = 9.0
let media = (nota1 + nota2 + nota3)/ 3

if (media >= 7){
    console.log("Aluno aprovado com média:" + media)
}else if ( media >= 5 && 7){
    console.log("Aluno em recuperação com média:" + media)
}
else{
    console.log("Aluno reprovado com média:" + media)
}