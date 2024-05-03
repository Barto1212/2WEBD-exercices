import { useParams } from "react-router-dom";
import { getPokemonDetails } from "../services/pokemon.service";
import { useEffect, useState } from "react";
import { PokemonData } from "../services/pokemon";

const PokemonDetails = () => {
  const { pokemonName } = useParams();
  const [pokemonDetail, setPokemonDetail] = useState<PokemonData | null>(null);
  useEffect(() => {
    if (pokemonName) {
      getPokemonDetails(pokemonName).then(setPokemonDetail);
    }
  }, []);
  return <p>{JSON.stringify(pokemonDetail)}</p>;
};

export { PokemonDetails };
