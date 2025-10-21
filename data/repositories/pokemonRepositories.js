class pokemonRepository {
     constructor() {
        this.traductor = {
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
    "steel": "acero",
    "fairy": "hada"
}
}
    async getPokemonById(id) {
        try{
            const apiData = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const pokemonData = await apiData.json();
            const traduccion = pokemonData.types.map(tipo => this.traductor[tipo.type.name]);
        return new Pokemon(
            pokemonData.id,
            pokemonData.name,
            pokemonData.sprites.front_default,
            traduccion
        );
        } catch (error) {
            return null;
        }
        
        
    }
}