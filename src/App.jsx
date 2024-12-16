import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FetchData from './FetchData'
import { getPokemon, getRandomPokemon, shuffleRandomPokemon } from './FetchDataJavascript'
import './App.css'

function App() {

  const [pokemonData, setPokemonData] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      const pokemons = await getPokemon();
      setPokemonData(pokemons);

    };
    fetchData();
  }, []);

  let randomPokemons = getRandomPokemon();
  shuffleRandomPokemon(randomPokemons);

  return (
    <>
      <div id="container">
        <div id="top">
          <div><h1>Memory Game</h1></div>
          <div>
            <h2>Score</h2>
            <h2>Top Score</h2>
          </div>
        </div>
        <div id="body"><FetchData /></div>
      </div>
    </>
  )
}

export default App
