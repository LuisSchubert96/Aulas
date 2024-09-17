const artigo ={
    nomeAutor: "Juliana",
    tema: "Direitos Humanos",
    texto: "Direitos Humanos são os direitos que todos os indivíduos possuem pelo simples fato de serem humanos. Os direitos humanos são baseados no respeito à individualidade e à liberdade, independente da condição social, cor, gênero ou religião da pessoa.A noção de um direito universal está presente desde a Antiguidade, mas foi na Revolução Francesa que este princípio foi posto em prática. Os Direitos Humanos servem para garantir que toda pessoa humana terá sua vida e suas escolhas respeitadas. Igualmente, assegura um tratamento igualitário para todos os seres humanos. Estes princípios de igualdade foram expressos em 30 artigos na Declaração Universal dos Direitos Humanos, lançados em 10 de dezembro de 1948, pela Organização das Nações Unidas (ONU).",
    ano:2024,
    revista:"Toda Materia",
    referência: "BEZERRA, Juliana. Direitos Humanos. Toda Matéria, [s.d.]. Disponível em: https://www.todamateria.com.br/direitos-humanos/. Acesso em: 16 set. 2024",
    apresentação: function(){
        console.log(this.tema, this.nomeAutor, this.ano),
        console.log(this.texto),
        console.log(`Referência:`, this.referência),
        console.log(this.revista)
    }
}
artigo.apresentação()