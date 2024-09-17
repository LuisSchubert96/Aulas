const carro = {
    marca: "Chevrolet",
    modelo: "Corsa",
    ano: 1999,
    cor: "Prata",
    descricao: function(){
        console.log(`O carro é um,${this.modelo}, da marca ${this.marca}, seu ano de lançamento é, ${this.ano}, e sua cor é ${this.cor}`)
    },
}
carro.descricao()
console.log(carro.descricao)