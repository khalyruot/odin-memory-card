export default function PokemonCard({name, src, onClick}){
    return(
        <div onClick={onClick}>
            <img src={src} alt={name} />
            <h3>{name}</h3>
        </div>
    )
}
