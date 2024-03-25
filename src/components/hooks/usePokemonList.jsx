import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import downloadPokemons from "../../utils/downloadPokemon";
 function usePokemonList() {
    const DEFAULT_URL = 'https://pokeapi.co/api/v2/pokemon';
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        pokedexUrl: DEFAULT_URL,
        nextUrl: DEFAULT_URL,
        previousUrl: DEFAULT_URL
    });
    
   
    useEffect(() => {
        downloadPokemons(pokemonListState,setPokemonListState,DEFAULT_URL);
    }, [pokemonListState.pokedexUrl]);
return [pokemonListState,,setPokemonListState];
}
export default usePokemonList;