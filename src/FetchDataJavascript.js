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

    console.log(pokemonIds);
    return Array.from(pokemonIds);

}

function shuffleRandomPokemon(pokemonIds){
    pokemonIds = getRandomPokemon();
}

export {getPokemon, getRandomPokemon, shuffleRandomPokemon};