function PokemonBall (props){
return (
    <>
    <img src={props.image} alt={props.name} />
        <div>{props.name}</div>
    </>
);

}

export default PokemonBall;