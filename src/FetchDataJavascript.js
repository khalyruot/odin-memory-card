async function getPokemon(){
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=24');
        const data = await response.json();
        let results = data.results;

        let promisesArray = results.map(result=>fetch(result.url).then(res=>res.json()));
        const pokemonData = await Promise.all(promisesArray);
        return pokemonData;

    }
    catch(error){
        console.log("Error Fetching Data: ", error);
    }

    
}

function getRandomPokemon(){
    const total_Pokemon_needed = 12;
    const total_Pokemon = 721;
    const pokemonIds = new Set();

    while(pokemonIds.size < total_Pokemon_needed){
        pokemonIds.add(Math.floor(Math.random() * total_Pokemon) + 1);
    }

    return Array.from(pokemonIds);

}

function shuffleRandomPokemon(pokemonList){
    const shuffledRandomPokemons = [...pokemonList];
    for(let i = shuffledRandomPokemons.length-1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1));
        [shuffledRandomPokemons[i], shuffledRandomPokemons[j]]=[
            shuffledRandomPokemons[j],
            shuffledRandomPokemons[i]
        ];
    }
    
    console.log(shuffledRandomPokemons);

    return shuffledRandomPokemons;
}

export {getPokemon, getRandomPokemon, shuffleRandomPokemon};