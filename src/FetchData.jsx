import React, { useState, useEffect } from 'react';

const FetchData = () => {
    const[dataImage, setDataImage] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
          try{
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=24');
            const data = await response.json();
            let results = data.results;

            let promisesArray = results.map(result=>fetch(result.url).then(res=>res.json()));
            const pokemonData = await Promise.all(promisesArray);

            setDataImage(pokemonData);
            
           
        
          }
          catch(error){
            console.log("Error Fetching Data: ", error);
          }
        };
        fetchData();
        },[]);

  let oddDataImage = [];

  function displayRandomDataImage(dataImage){
    let oddImageInsideFunc = dataImage.filter((_, index) => index % 2 !== 0);
    oddDataImage = oddImageInsideFunc;
    
  }
  displayRandomDataImage(dataImage);
  

  return (

    <div >
      <div>
          <ul id="image_grid">{oddDataImage.map((list, index)=>(
            <li key={index}>
              {list.id} | {list.name}
              <img src={list.sprites.front_default} alt={list.name} width="100" />
            </li>
          ))}</ul>
      </div>
    </div>
  );
}

export default FetchData;
