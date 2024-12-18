import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FetchData from './FetchData'
import { getPokemon, getRandomPokemon, shuffleRandomPokemon } from './FetchDataJavascript'
import './App.css'
import Pokemon_Card from './Pokemon_Card'

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
  
  console.log(pokemonList);

  const handleClick = (pokemonId) => {
    setPokemonList(prevList=>{
      let clickedPokemon;
      for(let i = 0; i < prevList.length; i++){
        if(pokemonId === prevList.id){
          clickedPokemon = prevList[i];
          break;
        }
      }

      if(clickedPokemon.isClick){
        if(score>highScore){
          setHighScore(score);
        }

        setHighScore(0);
      }
     
    })
    
  }

 

  const pokemonCards = pokemonList.map((pokemon)=>{
    return (
      <Pokemon_Card
       key={pokemon.id} 
       className = "card"
       src ={pokemon.image}
       alt = "Pokemon Name"
       onClick={handleClick}/>
    )
      
  });


  return (
    <>
      <div id="container">
        <div id="top">
          <div><h1>Memory Game</h1></div>
          <div>
            <h2>Score:</h2>
            <h2>Top Score</h2>
          </div>
        </div>
        <div id="body">{pokemonCards}</div>
      </div>
    </>
  )
}

export default App
