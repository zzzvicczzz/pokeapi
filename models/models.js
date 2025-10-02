function getPokemon(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
           .then(respuesta => respuesta.json())
}