import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FetchData from './FetchData'
import { getPokemon, getRandomPokemon, shuffleRandomPokemon } from './FetchDataJavascript'
import './App.css'
import PokemonCard from './Pokemon_Card'

function App() {

  const [pokemonList, setPokemonList] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(()=>{
    const fetchData = async () => {
      const pokemons = await getPokemon();
      setPokemonList(pokemons);
    };
    fetchData();
  }, []);


  const handleClick = event => {
    console.log("Hey Click");
  }


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
        <div id="body"><PokemonCard  onClick={()=> handleClick(pokemon.id)} /></div>
      </div>
    </>
  )
}

export default App
