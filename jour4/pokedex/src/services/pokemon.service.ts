const baseURL = "https://pokeapi.co/api/v2";

export type PokeResume = {
  name: string;
  url: string;
};

export type ApiResponse<R> = {
  count: number;
  next: string;
  previous: string;
  results: R;
};

export async function getPokemons(): Promise<ApiResponse<PokeResume[]>> {
  const datas = await fetch(`${baseURL}/pokemon/?offset=0&limit=20`);
  return await datas.json();
}
