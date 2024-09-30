function podeEstudarEmUmaFaculdade ( ensinoMedioConcluido, idade, cursandoOutraFaculdade){
    if (ensinoMedioConcluido && idade >= 18 && !cursandoOutraFaculdade){
        console.log("Pode cursar a faculsade")
    }else{
        console.log("Tu não pode não irmão")
    }
}
let ensinoMedioConcluido = true
let idade = 19
let cursandoOutraFaculdade = false
let resultado = podeEstudarEmUmaFaculdade(ensinoMedioConcluido, idade, cursandoOutraFaculdade);
