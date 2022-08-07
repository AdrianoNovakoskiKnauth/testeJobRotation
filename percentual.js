var SP = 67836.43
var RJ = 36678.66
var MG = 29229.88
var ES = 27165.48
var Outros = 19849.53

var Total = SP + RJ + MG + ES + Outros

console.log(`O estado de SP representa faturamento de ${((100 / Total) * SP).toFixed(2)}%`)
console.log(`O estado de RJ representa faturamento de ${((100 / Total) * RJ).toFixed(2)}%`)
console.log(`O estado de MG representa faturamento de ${((100 / Total) * MG).toFixed(2)}%`)
console.log(`O estado de ES representa faturamento de ${((100 / Total) * ES).toFixed(2)}%`)
console.log(`O estado de Outros representa faturamento de ${((100 / Total) * Outros).toFixed(2)}%`)