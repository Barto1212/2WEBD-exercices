type Ability = {
  name: string;
  url: string;
};

type AbilityEntry = {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
};

type Stat = {
  name: string;
  url: string;
};

type StatEntry = {
  base_stat: number;
  effort: number;
  stat: Stat;
};

type Type = {
  name: string;
  url: string;
};

type TypeEntry = {
  slot: number;
  type: Type;
};

export type PokemonData = {
  abilities: AbilityEntry[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: {
    name: string;
    url: string;
  }[];
  height: number;
  id: number;
  is_default: boolean;
  name: string;
  order: number;
  species: {
    name: string;
    url: string;
  };
  stats: StatEntry[];
  types: TypeEntry[];
  weight: number;
};

