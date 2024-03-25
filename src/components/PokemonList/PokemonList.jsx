
import './PokemonList.css';
import Pokemon from '../Pokemon/Pokemon';
import usePokemonList from '../hooks/usePokemonList';
function PokemonList() {
   const [pokemonListState,,setPokemonListState]=usePokemonList();
    return (
        <div className='pokemon-list-wrapper'>
            <div className='pokemon-list-header'>
                <h1>Pokemon List</h1>
            </div>
            <div className='page-controls'>
                <button
                    onClick={() => setPokemonListState({
                        ...pokemonListState,
                        pokedexUrl: pokemonListState.previousUrl
                    })}
                    disabled={!pokemonListState.previousUrl}
                >
                    Prev
                </button>
                <button
                    onClick={() => setPokemonListState({
                        ...pokemonListState,
                        pokedexUrl: pokemonListState.nextUrl
                    })}
                    disabled={!pokemonListState.nextUrl}
                >
                    Next
                </button>
            </div>
            <div className='pokemon-list'>
                {pokemonListState.pokemonList.map((pokemon) => (
                    <Pokemon name={pokemon.name} key={pokemon.id} id={pokemon.id} url={pokemon.image} />
                ))}
            </div>
        </div>
    );
}

export default PokemonList;
