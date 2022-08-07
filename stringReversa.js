var entrada = "Toda a frase deve ficar reversa"
var auxiliar = entrada.split("")

console.log(auxiliar)
var reversa = ""
for ( i = auxiliar.length; i > 0; i--) {
    reversa = reversa + auxiliar[i-1]
}
console.log(reversa)