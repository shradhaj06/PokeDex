import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./PokemonDetails.css";
import usePokemon from "../hooks/usePokemon";
import Pokemon from "../Pokemon/Pokemon";
 function PokemonDetails({pokemonName}){
    const [pokemon,pokemonListState]=usePokemon(pokemonName);
return<>
<h1><Link to="/">PokeDex
</Link>
</h1> 
{pokemon && <div className="pokemon-details-wrapper"><div className="pokemon-detail-name">{pokemon.name}</div>
<div className=""><img src={pokemon.image}/></div>
<div className="pokemon-attribute"><div>height:{pokemon.height}</div>
<div>weight:{pokemon.weight}</div>
</div>
 <div className="pokemon-types"><h1>type:</h1>{pokemon.types.map(t=> <span className="type" key={t.type.id}>{t.type.name}</span>)}</div></div>}
 <div className="similar">
    <h2>Similar Pokemons</h2>
    <div className="similar-pokemon-boxes">
        {pokemonListState.pokemonList.length>0 && pokemonListState.pokemonList.map(pokemon=><Pokemon name={pokemon.name} key={pokemon.id} url={pokemon.image} id={pokemon.id}/>)
         }
        </div>
        </div></>
}
export default PokemonDetails;