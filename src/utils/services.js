export const fetchPokemons = async (limit, offset) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
  );
  return await response.json();
};

export const fetchPokemonData = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

//Fn Get the initial Pokemons to play
const getAllPokemons = async () => {
  setLoading(true);
  let dataFromAllPokemons = [];
  fetchPokemons(generations[region].quantity, generations[region].since)
    .then(async (pokemons) => {
      const all = await Promise.all(
        pokemons.results.map(async (pokemon) => {
          return await fetchPokemonData(pokemon.url);
        }),
      );
      return all;
    })
    .then((all) => {
      //? Get an array with 10 options to catch
      let array10 = getTenOptions();
      setRoundPokemons(array10);
      const firstPokemon = all.find((poke) => poke.id === array10[0]);
      all.forEach((element) => {
        dataFromAllPokemons.push({ id: element.id, name: element.name });
      });
      setAllTheNames(dataFromAllPokemons);
      setPokemonToCatch(firstPokemon);
      setAllPokemons(all);
      setLoading(false);
      setOptionsToCatch(getThreeOptions(firstPokemon.id));
    });
  setStartGame(true);
};

//Fn Get 3 options to play with unique pokemons
const getThreeOptions = (newIndex) => {
  let arrayPokemonOption = [newIndex];
  let count = 1;
  while (count !== 3) {
    let newPokemonToAdd = randomId(
      generations[region].firstId,
      generations[region].lastId,
    );
    if (newPokemonToAdd !== newIndex) {
      if (!arrayPokemonOption.includes(newPokemonToAdd)) {
        arrayPokemonOption.push(newPokemonToAdd);
        count++;
      }
    }
  }
  shuffle(arrayPokemonOption);
  return arrayPokemonOption;
};

//Fn Set an audio to play depending on the answer
const playAudio = (audioOption) => {
  new Audio(audioOption).play();
};

//Fn Handle the response after having selected an option
const handleOptions = (index) => {
  let clearPokemon = roundPokemons.filter((item) => item !== pokemonToCatch.id);
  setPokedex([...pokedex, pokemonToCatch]);
  setRoundPokemons(clearPokemon);
  if (pokemonToCatch.id === index) {
    setCaughtPokemons(caughtPokemons + 1);
    playAudio(soundSuccess);
    setAnswer('CORRECT');
    setTimeout(() => {
      setAnswer('');
    }, 500);
  } else {
    playAudio(soundError);
    setAnswer('INCORRECT');
    setTimeout(() => {
      setAnswer('');
    }, 500);
  }
};

//Fn Set the pokemons to play in the round
const getTenOptions = () => {
  let arrayTenToWin = [];
  let newIndex;
  for (let i = 0; i < 10; i++) {
    newIndex = randomId(
      generations[region].firstId,
      generations[region].lastId,
    );
    if (arrayTenToWin.includes(newIndex) == true) {
      i = i - 1;
      getTenOptions();
    } else {
      arrayTenToWin.push(newIndex);
    }
  }
  return arrayTenToWin;
};
