var entrada = 34
var primeiro = 0
var segundo = 1
var auxiliar = 0
var final = [primeiro, segundo]
while (entrada > auxiliar) {
    auxiliar = primeiro + segundo
    primeiro = segundo
    segundo = auxiliar
    final.push(auxiliar)
} 

if (entrada == segundo) {
    console.log(`O valor de entrada foi ${entrada} e consta na sequência de Fibonacci`)
} else {
    console.log(`O valor de entrada foi ${entrada} e NÃO consta na sequência de Fibonacci`)
}

console.log(final)

