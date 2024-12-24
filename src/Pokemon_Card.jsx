export default function PokemonCard({id, name, src, onClick}){
    return(
        <div onClick={onClick}>
            <img src={src} alt={name} />
            <h3>{name}</h3>
            <p>{id}</p>
        </div>
    )
}
