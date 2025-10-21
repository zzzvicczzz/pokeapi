class PokemonView {
    constructor() {
        this.contenedor = document.getElementById('pokemon-todos');
        this.typesList = document.getElementById('types-list');
    }
    mostrarPokemon(pokemon) {
        if (!pokemon) {
        return;
        }
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjetas';
        tarjeta.dataset.id = pokemon.id;
        const numero = document.createElement('div');
        numero.className = 'num';
        numero.innerHTML = `<p>#${pokemon.formateoId()}</p>`;
        tarjeta.appendChild(numero);
        const imagen = document.createElement('div');
        imagen.className = 'img';
        imagen.innerHTML = `<img src="${pokemon.image}" alt="${pokemon.name}">`;
        tarjeta.appendChild(imagen);
        const nombre = document.createElement('div');
        nombre.className = 'nombre';
        nombre.innerHTML = `<p>${pokemon.name}</p>`;
        tarjeta.appendChild(nombre);
        const tipos = document.createElement('div');
        tipos.className = 'tipos';
        for (let i = 0; i < pokemon.types.length; i++) {
            const tipo = document.createElement('p');
            tipo.className = pokemon.types[i];
            tipo.innerHTML = pokemon.types[i];
            tipos.appendChild(tipo);    
        }
        tarjeta.appendChild(tipos);
        this.contenedor.appendChild(tarjeta);
    }
    
    mostrarError(id) {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjetas';
        tarjeta.dataset.id = id;
        
        const imagen = document.createElement('div');
        imagen.className = 'img';
        imagen.innerHTML = `<img src="imagenes/error.jpg" alt="Error cargando Pokemon">`;
        tarjeta.appendChild(imagen);
        
        const nombre = document.createElement('div');
        nombre.className = 'nombre';
        nombre.innerHTML = `<p>Error al cargar</p>`;
        tarjeta.appendChild(nombre);
        
        const tipos = document.createElement('div');
        tipos.className = 'tipos';
        const tipoError = document.createElement('p');
        tipoError.className = 'error';
        tipoError.innerHTML = 'error';
        tipos.appendChild(tipoError);
        tarjeta.appendChild(tipos);
        
        this.contenedor.appendChild(tarjeta);
    }

    filtros(callback) {
        this.typesList.addEventListener('click', (event) => {
            if (event.target.classList.contains('btn')) {
                callback(event.target.id);
            }
        });
    }

    filtroPorTipo(type) {
        const cards = this.contenedor.querySelectorAll('.tarjetas');
        cards.forEach(card => {
            const hasType = card.querySelector(`.tipos .${type}`);
            card.style.display = hasType ? 'block' : 'none';
        });
    }

    mostrarTodo() {
        const cards = this.contenedor.querySelectorAll('.tarjetas');
        cards.forEach(card => card.style.display = 'block');
    }
    
}
