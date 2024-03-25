import { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/search";
import './Pokedex.css';
import Pokemon from "../Pokemon/Pokemon";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
function Pokedex(){
    const [searchTerm,setSearchTerm]=useState('');
    
    return(
    <div className="pokedex-wrapper">
        <h1>POKEDEX</h1>
        <Search updateSearchTerm={setSearchTerm}/>
        {searchTerm}
        {searchTerm? <PokemonDetails key={searchTerm} pokemonName={searchTerm}/>:<PokemonList/>}
        </div>
    );
}
export default Pokedex;