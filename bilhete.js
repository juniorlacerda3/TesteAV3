console.log("====================================");
console.log("       EMISSÃO DE PASSAGENS");
console.log("====================================");

function passageiro1(pass, nPass){
    
    console.log("Passageiro: " + pass);
    console.log("N° passaporte: " + nPass);
    return;
}

function dadosVoo (reserva, voo, dest, ter, gate, assento){
    console.log("Dados do voo: ");
    console.log("Código de reserva: " + reserva);
    console.log("N° voo: " + voo + " - " + dest);
    console.log("Terminal: " + ter + " Portão: " + gate);
    console.log("Assento:  " + assento);
    return;
}

function pagamento(vl1, vl2, vl3, vl4){
    console.log("Pagamento: ");
    console.log("Custo de transporte aéreo: R$ " + vl1)
    console.log("Tarifa: R$ " + vl2);
    console.log("Sobretaxa transportadora (YQ): R$ " + vl3);
    console.log("Despesas de Serviço de Passageiros (YP): R$ " + vl4);
    console.log("Preço total do bilhete: R$ "); //+ (vl1 + vl2 + vl3 + vl4));
    return vl1 + vl2 + vl3 + vl4;
}

function cotacao(real){
    console.log("Cotação de finanças: ");
    console.log("Valor disponível em R$: " + real)
    console.log("Real para Euro €: " + real / 6.4);
    console.log("Real para Dólar US$: " + real / 5.65);
    return;
}

function paraFahrenheit (fah){
    console.log("Temperatura local: ");
    console.log("Temperatura em Fahrenheit: ");
    return(fah * 9/5) + 32;
}

function paraCelsius(cel){
    console.log("Temperatura em Celsius: ")
    return (cel - 32) * 5/9;
   
}

module.exports = {
    passageiro1,
    dadosVoo,
    pagamento,
    cotacao,
    paraFahrenheit,
    paraCelsius
};