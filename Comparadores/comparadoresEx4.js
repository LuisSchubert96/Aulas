a = true;
b = false;
c = true;

resultado1 = a || b;
resultado2 = b || c;
resultado3 = a || c;
resultado4 = a || b && c;

console.log(" a || b",resultado1);
console.log("b || c",resultado2);
console.log("a || c",resultado3);
console.log("a || b || c",resultado4);

const nome = "mika"
const idade = 27
const frase = `meu nome é ${nome} e tenho ${idade} anos`
console.log(frase)
