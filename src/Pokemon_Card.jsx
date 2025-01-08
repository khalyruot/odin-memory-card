export default function PokemonCard({name, src, onClick}){
    return(
        <div id="pokemon_item" onClick={onClick}>
            <img src={src} alt={name} />
        </div>
    )
}
