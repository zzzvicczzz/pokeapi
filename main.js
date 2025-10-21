const repository = new pokemonRepository();
const view = new PokemonView();
const presenter = new PokemonPresenter(repository, view);
presenter.todosPokemon();