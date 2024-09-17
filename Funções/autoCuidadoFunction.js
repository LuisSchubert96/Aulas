// funcao para gerar um adjetivo de qualidade
function gerarAdjet(nome){
    //lista de adjetivos
    const adjetivos = ["esforçado", "divertido", "feliz", "focado"]
    //gerar indice aleatorio para escolher adjetivo
    const indiceAleatorio = Math.floor(Math.random() * adjetivos.length)
    // Math.floor arredonda o número para baixo
    // Math.random() randomizar
    return nome + " você é " + adjetivos[indiceAleatorio]
}
// exemplo de uso ou chamado
console.log(gerarAdjet("Luís"))