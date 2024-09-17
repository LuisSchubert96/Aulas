const carroDosSonhos = {
    marca:"Honda",
    modelo: "Civic",
    cor: "Branco",
    ano: 2024,
    combustivel: "Hibrid",
    quilometragem: 0,
    preco: 265900,
    ligado: false,
    ligar: function(){
        this.ligado = true
        console.log("O carro não faz barulho mas está ligado")
    }
}
carroDosSonhos.ligar()
console.log(carroDosSonhos)
console.log(carroDosSonhos.ligar)
