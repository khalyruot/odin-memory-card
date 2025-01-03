import { useEffect, useState } from 'react'
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

  
  const handleClick = (pokemonId) => {

    console.log(pokemonId);
    
 
    setPokemonList(prevList=>{

      const clickedPokemon = prevList.find((pokemon)=>pokemon.id === pokemonId);

      console.log(clickedPokemon.isClicked);

          if(clickedPokemon.isClicked){
            if(score>highScore){
              setHighScore(score);
            }
    
            setHighScore(0);
            
          }
        
        
      const updatedList = prevList.map((pokemon)=>{
        //if(pokemon.id == pokemonId){
          //pokemon.isClicked = true;
        //}
        return pokemon;
      })
      setScore(prevScore => prevScore + 10);
      
      return shuffleRandomPokemon(updatedList);
        
  })
}

 

  useEffect(() => {
    if (pokemonList.length > 0) {
      console.log(pokemonList); // Access the id of the first Pokémon after it's loaded
    }
  }, [pokemonList]);

  

  const pokemonCards = pokemonList.map((pokemon)=>{
    return (
      <Pokemon_Card
       key={pokemon.id} 
       name = {pokemon.name}
       src ={pokemon.image}
       onClick={()=>handleClick(pokemon.id)}/>
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


export default App;
