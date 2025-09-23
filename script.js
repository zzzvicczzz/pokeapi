let traductor = {
    "normal": "normal",
    "fire": "fuego",
    "water": "agua",
    "electric": "electrico",
    "grass": "planta",
    "ice": "hielo",
    "fighting": "lucha",
    "poison": "veneno",
    "ground": "tierra",
    "flying": "volador",
    "psychic": "psiquico",
    "bug": "bicho",
    "rock": "roca",
    "ghost": "fantasma",
    "dragon": "dragon",
    "dark": "siniestro",
    "steel": "acero",
    "fairy": "hada"
};

for(i = 2; i <= 151; i++) {
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
        <p class="${traductor[datos.types[0].type.name]}">${traductor[datos.types[0].type.name]}</p>
        <p class="${traductor[datos.types[1].type.name]}">${traductor[datos.types[1].type.name]}</p>
    `;
} else {
    tiposHTML = `
        <p class="${traductor[datos.types[0].type.name]}">${traductor[datos.types[0].type.name]}</p>
    `;
}
    let contenedor = document.getElementById("pokemon-todos");
    contenedor.innerHTML += `
    <div class="tarjetas">
        <div class="num">
            <p>#${num}</p>
        </div>
        <div class="img">
            <img src="${datos.sprites.front_default}">
        </div>
        <div class="nombre">
            <p>${datos.name}</p>
        </div>
        <div class="tipos">
            ${tiposHTML}
        </div>
    </div>
    `;
    });

}

