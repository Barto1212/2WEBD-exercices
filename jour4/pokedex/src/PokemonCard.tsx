import { PokeResume } from "./services/pokemon.service";
const PokemonCard = ({ pokeResume, id }: { pokeResume: PokeResume; id: string }) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return (
    <div className="card">
      <p>{pokeResume.name}</p>
      <img src={imgUrl} alt={pokeResume.name} />
    </div>
  );
};

export { PokemonCard };
