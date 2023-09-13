var inicio, final;

function verificaNum() {
  inicio = parseInt(document.getElementById("ini").value);
  final = parseInt(document.getElementById("fin").value);
  if (inicio < final) {
    generaRango(inicio, final);
  } else {
    alert(
      "Tus valores no son correctos\nIngresa un numero inicial menor que el final"
    );
  }
}

function generaRango(x, y) {
  let rangoNumeros = [];
  for (var i = x; i <= y; i++) {
    rangoNumeros.push(i);
  }
  console.log(rangoNumeros);
  alert(rangoNumeros);
}
