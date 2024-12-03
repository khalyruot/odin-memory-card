import React, { useState, useEffect } from 'react';

const FetchData = () => {
    const[dataImage, setDataImage] = useState([]);

    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=12')
        .then(response => response.json())
        .then(data => {
          let results = data.results;
          let promisesArray = results.map(result=>{
            return fetch(result.url).then(response=>response.json());
          })
          return Promise.all(promisesArray);
        })
        .then((pokemonData)=>{
          setDataImage(pokemonData);
          console.log("Main Pokemon State: ", pokemonData)})
        })
  return (

    <div >
      <div>
          <ul id="image_grid">{dataImage.map((list, index)=>(
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
