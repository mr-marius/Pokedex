//Creation of an object
const pokeApi = {};
//People model
function convertPokemonDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    pokemon.image = pokeDetail.sprites.other.dream_world.front_default;
    pokemon.name = pokeDetail.name;
    pokemon.number = pokeDetail.order;
    //Array destructuring
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;
    pokemon.types = types;
    pokemon.type = types;
    //console.log(pokemon.type[0]);
    return pokemon
}
//Pokemon details
pokeApi.getPokemonDeteails = (pokemon) => {
    //Request
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokemonDetailToPokemon)
}
//Function of request
pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())
        .then((jasonBody) => jasonBody.results)
        .then((pokemonsList) => pokemonsList.map(pokeApi.getPokemonDeteails))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonDeteails) => pokemonDeteails)
        .catch((error) => console.error(error))
}