function renderizarElemento() {
  const container = document.getElementById("container");

  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const resultados = data.results;

      resultados.forEach((resultado) => {
        /*const img = document.createElement("img");
        img.src = resultado.image;

        container.appendChild(img);*/

        document.write(`<img src='${resultado.image}'/> ${resultado.name}`);
      });
    });
}
