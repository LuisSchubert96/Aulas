// Função para resolver uma Equação de segundo grau
function resolverEquacaoDeSegundoGrau(a, b, c){
    //passo 1: calculor o discriminante (delta)
    let delta = b*b-4*a*c
    // passo 2: verificar se o delta é negativo 
    if (delta < 0){
        // delta < 0 equação não tem soluções reais
        console.log ("A equação não tem soluções reais")
    }else if (delta === 0){
        // tem uma solução real (raizes iguais)
        let x = -b/(2*a)
        console.log("A equação tem uma solução real : x = ", x)
    }else {
        // delta for positivo (>0), a equação tem duas soluções reais e diferentes
        let x1 = (-b + Math.sqrt(delta))/(2*a)
        let x2 = (-b - Math.sqrt(delta))/(2*a)
        console.log("A equação tem duas soluções reais: x1 = ", x1, "e x2,", x2 )
    }
}
resolverEquacaoDeSegundoGrau(1,-10,25)