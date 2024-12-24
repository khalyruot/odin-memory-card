async function getPokemon(){
    try{
        const pokemonId = getRandomPokemon();
        const pokemonPromise = pokemonId.map(async (pokemonId) =>{
            const response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
            );
            return response.json();
        })
       
        let randomPokemon = await Promise.all(pokemonPromise);

        return randomPokemon.map((pokemon)=>{
            return{
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.front_default,
                isClicked: false,  
            };
        });
        
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
    console.log(pokemonList);

    return shuffledRandomPokemons;
}

export {getPokemon, getRandomPokemon, shuffleRandomPokemon};