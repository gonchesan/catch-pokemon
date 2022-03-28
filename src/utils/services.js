export const fetchPokemons = async (limit) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`
  );
  return await response.json();
};

export const fetchPokemonData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};
