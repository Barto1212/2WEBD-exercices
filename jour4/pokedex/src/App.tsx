import { useEffect, useState } from "react";
import "./App.css";
import { getPokemons, PokeResume } from "./services/pokemon.service";
import { PokemonCard } from "./PokemonCard";

function App() {
  const [pokelist, setPokelist] = useState<PokeResume[]>([]);
  useEffect(() => {
    getPokemons().then((res) => {
      setPokelist(res.results);
    });
  }, []);
  return (
    <ul className="pokelist">
      {pokelist.length > 0 &&
        pokelist.map((pokemon, id) => (
          <li>
            <PokemonCard id={(id + 1).toString()} pokeResume={pokemon} />
          </li>
        ))}
    </ul>
  );
}

export default App;
