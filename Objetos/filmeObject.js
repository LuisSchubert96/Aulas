const filme = {
    titulo: "O pequeno grande Tomate",
    diretor: "Uma Pessoa Criativa",
    sinopse: "Esse filme mega empolgante mostra a pequena grande aventura desse pequeno grande Tomate",
    ano: 2010,
    genero: "Comedia",
    avaliacoes: [2,0,4,5,1], 
    apresentação: function(){
        console.log(`Apresento à vocês o filme, ${this.titulo}, do diretor ${this.diretor}, ${this.sinopse}, ${this.ano}, ${this.genero}`)
        console.log(` e sua avaliação é ${this.avaliacoes}`)
    },
}
filme.apresentação()

