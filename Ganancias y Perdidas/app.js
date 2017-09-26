//Ingresos
var income = prompt("¿Cuánto  es el Ingreso?");//500
// Costos
var cost = prompt("¿Cuanto es el costo?"); //65
//Porcentaje de impuestos
var taxPercent=prompt("¿Cuanto es el porcentaje (%) de impuestos");
//Ganancia bruta
var grossProfit = income-cost;//335
////obteniendo cantidad de impuestos
var tax= taxPercent*grossProfit/100;//60.3
//ganancia Neta
var netIncome = grossProfit-tax;
document.write("Tu ganancia neta es $ " + netIncome );
