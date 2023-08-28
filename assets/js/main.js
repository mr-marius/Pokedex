//Selecionando tag com id pokemon-list
const pokemonOl = document.getElementById('pokemon-list');
//Selecionando tag com id show-more para paginação
const showMoreButton = document.getElementById('show-more');
const limit = 10;
let offset = 0;

function showMorePokemons(offset, limit) {

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>
            `<li class="content-list-item ${pokemon.type[0]}">
                <!--Número e nome do pokemon-->
                <span class="content-list-item-number">#${pokemon.number}</span>
                <span class="content-list-item-title">${pokemon.name}</span>
                <!--Div contendo descrição do pokemon-->
                <div class="description">
                    <ol class="description-list">
                    ${pokemon.types.map((type) => `<li class="description-list-item ${type}">${type}</li>`).join('')}
                    </ol>
                <img src="${pokemon.image}">
                </div>
            </li>
        `
        ).join('');
        pokemonOl.innerHTML += newHtml;
    })
}

showMorePokemons(offset, limit);

showMoreButton.addEventListener('click', () => {
    offset += limit;
    showMorePokemons(offset, limit);
})

