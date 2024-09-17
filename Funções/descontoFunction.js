
function gerarDesconto(precoOriginal, desconto){
    return precoComDesconto = precoOriginal - (precoOriginal * (desconto/100))
}
precoOriginal = 100
desconto = 15
precoComDesconto = gerarDesconto(precoOriginal, desconto)
console.log("O valor com o desconto é", precoComDesconto)