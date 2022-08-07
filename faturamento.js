const faturamento = require('./faturamento.json')

var menorFat = faturamento[0].valor
var maiorFat = 0
var diasMedia = 0

async function somaFaturamento () {
  var soma  = 0
  faturamento.forEach(i => {
    soma = soma + i.valor
  })
  return await soma
}

(async function Faturamento () {
  var somaFat = await somaFaturamento()
  var mediaFat = await somaFat / faturamento.length
  faturamento.forEach((i) => {
    if (i.valor < menorFat && i.valor > 0) {
      menorFat = i.valor
    } else if (i.valor > maiorFat) {
      maiorFat = i.valor
    }
    if (i.valor > mediaFat ) {
      diasMedia++
    }
  })
  
  await console.log("Menor faturamento = " + menorFat)
  await console.log("Maior faturamento = " + maiorFat)
  await console.log("Total de dias acima da média de faturamento = " + diasMedia)
})();
