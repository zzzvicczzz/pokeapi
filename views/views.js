function vistaPokemon(num, nombre, imagen, tiposHTML){
    let contenedor = document.getElementById("pokemon-todos");
    contenedor.innerHTML += `
    <div class="tarjetas">
        <div class="num">
            <p>#${num}</p>
        </div>
        <div class="img">
            <img src="${imagen}">
        </div>
        <div class="nombre">
            <p>${nombre}</p>
        </div>
        <div class="tipos">
            ${tiposHTML}
        </div>
    </div>
    `;
}