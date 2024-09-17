const Cachorro = {
    nome: 'Manolo',
    idade:  2,
    raca: 'Caramelo',
    cor: 'Caramelo ^2',
    latir: function(){
        console.log('Au,Au')
    },
    comer: function(comida){
        console.log(`${this.nome}, está comendo, ${comida}`)
    },
    unificando: function(){
        console.log(`Este é o ${this.nome}, ele é da raça ${this.raca}, tem ${this.idade} anos e é da cor ${this.cor}`)
    }
}
Cachorro.latir()
Cachorro.comer("Petisco")
Cachorro.unificando()