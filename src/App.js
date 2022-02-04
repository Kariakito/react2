import Navbar from './Components/Navbar/index';
import PokemonBall from './Components/PokemonBall/pokemonBall';


const pokemons = [
  {
    name: "bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    types: ["grass", "poison"],
  },
  {
    name: "ivysaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    types: ["grass", "poison"],
  },
  {
    name: "venusaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    types: ["grass", "poison"],
  },
  {
    name: "charmander",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    types: ["fire"],
  },
  {
    name: "charmeleon",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    types: ["fire"],
  },
  {
    name: "charizard",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    types: ["fire", "flying"],
  },
  {
    name: "squirtle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    types: ["water"],
  },
  {
    name: "wartortle",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    types: ["water"],
  },
  {
    name: "blastoise",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    types: ["water"],
  },
  {
    name: "caterpie",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    types: ["bug"],
  },
];

function App() {
  return (
    <div className="App" style={{backgroundColor: 'lightblue'}}>
      <h1>Hello Pockemon Word!!!</h1>

    <Navbar />

    <br />

<h3 className="subtitle" style={ {display: 'flex', justifyContent: 'center'}}>Pokemon's go here!!!</h3>

<div className="pokeBall"style={ {display: 'flex', justifyContent: 'center',  width: '80%', margin: '0 auto', backgroundColor: 'lightgray'}} >


<br />

{pokemons.map((pokemon) => {

  return (
  <>
    <PokemonBall name={pokemon.name} image={pokemon.image} />
    

  </>
  );
})}



</div>

</div>
  );
}

export default App;
