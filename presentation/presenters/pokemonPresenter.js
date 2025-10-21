class PokemonPresenter {
    constructor (repository, view) {
        this.pokemonRepository = repository;
        this.pokemonView = view;
        this.pokemonView.filtros((type) => {
            if (type === 'todos') {
                this.pokemonView.mostrarTodo();
            } else {
                this.pokemonView.filtroPorTipo(type);
            }
        });
    }
    async todosPokemon() {
        for (let i = 1; i <= 151; i++) {
            const pokemon = await this.pokemonRepository.getPokemonById(i);
            if (pokemon){
                this.pokemonView.mostrarPokemon(pokemon);
            } else {
                this.pokemonView.mostrarError(i);
            }
        }
    }
}
