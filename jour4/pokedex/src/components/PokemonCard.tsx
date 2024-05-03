import { Link } from "react-router-dom";
import { PokeResume } from "../services/pokemon.service";
const PokemonCard = ({ pokeResume, id }: { pokeResume: PokeResume; id: string }) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return (
    <Link to={`/pokemon/${pokeResume.name}`}>
      <div className="card">
        <img src={imgUrl} alt={pokeResume.name} />
        <p>{pokeResume.name}</p>
      </div>
    </Link>
  );
};

export { PokemonCard };
