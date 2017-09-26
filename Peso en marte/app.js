//declarando variable gravedad en la tierra, marte y jupiter//
var user = prompt("¿Cuál es tu peso");
var planet = parseInt(prompt("Elige tu planeta\n1 es marte, 2 es jupiter"));
var weight = parseInt(user);
var gEarth = 9.8;
var gMars  = 3.7;
var gJupiter = 24.8;
var finalWeight;
var name = " ";
if (planet == 1)
{
  finalWeight = weight * gMars / gEarth;
  name ="Marte";
// Código si la condición se cumple
}
else if (planet == 2)
{
  finalWeight = weight * gJupiter / gEarth;
  name = "jupiter";
  // Código si la segunda  condición se cumple
}
else
{
finalWeight = 1000000;
name = "kripton";
}
finalWeight = parseInt(finalWeight);
document.write("Tu peso en " + name + " es <strong>" + finalWeight + " kilos</strong>");
