var weight = null;
var height = null;

function calculadoraIMC() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  var IMC;
  var weightMart;

  //weight = parseFloat(prompt("¿Cuál es tu peso en kg?"));
  //height = parseFloat(prompt("¿Cuál es tu talla en m?"));

  IMC = weight / Math.pow(height, 2);
  weightMart = (weight / 9.81) * 3.711;

  alert(
    "Hola. \nPesas " +
      weight +
      " kg y mides " +
      height +
      " m \nTu IMC es " +
      IMC.toFixed(2)
  );
}
