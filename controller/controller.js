class controllerPokemon {
    
    this.botonFiltrar();
}
    botonFiltrar() {
        document.getElementById('types-list').addEventListener('click', (event) => {
            if (event.target.classList.contains('btn')) {
                let boton = event.target.id;
                this.filtrarPokemon(boton);
            }
        });   
    }
    filtrarPokemon(boton) {
        console.log(`Filtrando por: ${boton}`); // ⬅️ Agregar esta línea
        let tarjetas = document.querySelectorAll('.tarjetas');
        if (boton === 'todos') {
            tarjetas.forEach(tarjeta => {
                tarjeta.style.display = 'block';
            });
        } else {

            tarjetas.forEach(tarjeta => {
                let btn = tarjeta.querySelector(`.tipos p.${boton}`);
                if (btn) {
                    tarjeta.style.display = 'block';
                } else {
                    tarjeta.style.display = 'none';
                }       
            });
        }
    }
    todosPokemon() {
        for (let i = 2; i <= 151; i++) {
            this.mostrarPokemon(i);
        } 
    }
    mostrarPokemon(id) {
        getPokemon(id) 
        .then(datos => {
            let num = '';
            if (datos.id < 10) {
                num = "00" + datos.id;
            } else if (datos.id < 100) {
                num = "0" + datos.id;
            } else {
                num = datos.id;
            }
            let imagen = datos.sprites.front_default;
            let nombre = datos.name;
            let tiposHTML = ''
            if (datos.types.length === 2) {
                tiposHTML = `
                <p class="${this.traductor[datos.types[0].type.name]}">${this.traductor[datos.types[0].type.name]}</p>
                <p class="${this.traductor[datos.types[1].type.name]}">${this.traductor[datos.types[1].type.name]}</p>
                `;
            } else {
                tiposHTML = `
                    <p class="${this.traductor[datos.types[0].type.name]}">${this.traductor[datos.types[0].type.name]}</p>
                `;
            }
            vistaPokemon(num, nombre, imagen, tiposHTML);
        });
    }
}