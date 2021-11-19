var calculadora = require("./bilhete") ;

console.log(calculadora.passageiro1 ("LACERDA, JÚNIOR", "FR17021803")) ;

console.log(calculadora.dadosVoo("MC4517", "1810", "FOR, Fortaleza,Brasil - FCO, Roma, Itália", "01", "33", "17-F"));

var vl1 = parseFloat(940.19);
var vl2 = parseFloat(250.25);
var vl3 = parseFloat(78.89);
var vl4 = parseFloat(53.45);
console.log(calculadora.pagamento(vl1, vl2, vl3, vl4));

var valor = parseFloat(9539.45);
console.log(calculadora.cotacao(valor));

console.log(calculadora.paraFahrenheit(25));
console.log (calculadora.paraCelsius(77));
