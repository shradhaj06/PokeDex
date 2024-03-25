import axios from "axios";
async function downloadPokemons(pokemonListState,setPokemonListState,defaultUrl,limit=20) {
    try {
        const response = await axios.get(pokemonListState.pokedexUrl?pokemonListState.pokedexUrl: defaultUrl);
        let pokemonResults = response.data.results? response.data.results:response.data.pokemon;
        pokemonResults=pokemonResults.slice(0,limit);
        const pokemonPromise = pokemonResults.map((p,idx) => {
            if(p.url){
            return axios.get(p.url);}
        else if(p.pokemon.url){
            return axios.get(p.pokemon.url);
        }

        });
        const pokemonListData = await axios.all(pokemonPromise);
        console.log(pokemonListData);
        const pokemonFinalList = pokemonListData.map((pokemonData) => {
            const pokemon = pokemonData.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types
            };
        });
        setPokemonListState({
            ...pokemonListState,
            pokemonList: pokemonFinalList,
            nextUrl: response.data.next,
            previousUrl: response.data.previous
    });
    } catch (error) {
        console.error('Error fetching Pokemon data:', error);
    }
}
export default downloadPokemons;