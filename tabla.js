var filas, columnas;

function crearTabla() {
  filas = document.getElementById("filas").value;
  columnas = document.getElementById("columnas").value;

  var mybody = document.getElementsByTagName("body")[0];

  tabla = document.createElement("table");
  tblbody = document.createElement("tbody");

  for (var i = 0; i < filas; i++) {
    var hilera = document.createElement("tr");

    for (var j = 0; j < columnas; j++) {
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(
        "Fila = " + i + " Columna = " + j
      );

      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }

    tblbody.appendChild(hilera);
  }

  tabla.appendChild(tblbody);
  mybody.appendChild(tabla);
  tabla.setAttribute("border", "1");
}
