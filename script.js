for(i = 1; i <= 151; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log(datos.name);
        console.log(datos.id);
        console.log(datos.sprites.front_default);
        console.log(datos.types.length);
        if (datos.types.length === 2) {
            console.log(datos.types[0].type.name);
            console.log(datos.types[1].type.name);
        } else {
            console.log(datos.types[0].type.name);
        }
    let num = '';
if (datos.id < 10) {
    num = "00" + datos.id;
} else if (datos.id < 100) {
    num = "0" + datos.id;
} else {
    num = datos.id;
}
        let tiposHTML = '';
if (datos.types.length === 2) {
    tiposHTML = `
        <p>${datos.types[0].type.name}</p>
        <p>${datos.types[1].type.name}</p>
    `;
} else {
    tiposHTML = `
        <p>${datos.types[0].type.name}</p>
    `;
}
    let contenedor = document.getElementById("pokemon-todos");
    contenedor.innerHTML += `
    <div class="tarjetas">
        <div class="num">
            <p>#${num}</p>
        </div>
        <div class="nombre">
            <p>${datos.name}<p>
        </div>
        <div class="img">
            <img src="${datos.sprites.front_default}">
        </div>
        <div class="tipos">
            <p>${tiposHTML}</p>
        </div>
    </div>
    `;
    });

}

