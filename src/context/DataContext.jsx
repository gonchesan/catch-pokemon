import { createContext, useEffect, useState } from 'react';

//* Functions and services
import { generations, randomId, shuffle } from '../utils/functions';
import { fetchPokemonData, fetchPokemons } from '../utils/services';
//* Assets sounds
import soundError from '../assets/audio/wrongAnswer.mp3';
import soundSuccess from '../assets/audio/rightAnswer.mp3';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [region, setRegion] = useState(''); //?  Region to play
  const [isRegionSelected, setIsRegionSelected] = useState(false); //? Region selected, ready to play
  const [startGame, setStartGame] = useState(false); //? Boolean to start the game and redirect
  const [caughtPokemons, setCaughtPokemons] = useState(0); //? The Score: Number of caught pokemons
  const [pokemonToCatch, setPokemonToCatch] = useState(); //? The right answer: Pokemon selected to play
  const [optionsToCatch, setOptionsToCatch] = useState([]); //? 3 options to choose
  const [roundPokemons, setRoundPokemons] = useState([]); //? 10 Pokemons to catch per game
  const [allPokemons, setAllPokemons] = useState({}); //? All the pokemons of the selected generation
  const [loading, setLoading] = useState(false); //? Boolean to know if the info is being loaded
  const [allTheNames, setAllTheNames] = useState({}); //? Data cleaned to play: T he correct name and id
  const [pokedex, setPokedex] = useState([]); //? Caught pokemons
  const [showModal, setShowModal] = useState(false); //? Modal game over
  const [answer, setAnswer] = useState(''); //? Set the answer correct or incorrect
  const [scoredTime, setScoredTime] = useState(0);
  const [readyToPlay, setReadyToPlay] = useState(false);
  const [showRegions, setShowRegions] = useState(false);

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
    let clearPokemon = roundPokemons.filter(
      (item) => item !== pokemonToCatch.id,
    );
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

  //Fn import font via webfontloader
  useEffect(() => {
    setShowModal(false);

    // WebFont.load({
    //   google: {
    //     families: ['Saira Condensed', 'ZCOOL QingKe HuangYou'],
    //   },
    // });
  }, []);

  useEffect(() => {
    if (roundPokemons.length > 0) {
      const item = allPokemons.find((poke) => poke.id === roundPokemons[0]);
      setTimeout(() => {
        setPokemonToCatch(item);
        setOptionsToCatch(getThreeOptions(item.id));
      }, 500);
    } else {
      if (startGame) {
        setShowModal(true);
        //TODO the game is over
      }
    }
  }, [pokedex]);

  return (
    <DataContext.Provider
      value={{
        region,
        setRegion,
        isRegionSelected,
        setIsRegionSelected,
        startGame,
        setStartGame,
        caughtPokemons,
        setCaughtPokemons,
        pokemonToCatch,
        setPokemonToCatch,
        optionsToCatch,
        setOptionsToCatch,
        roundPokemons,
        setRoundPokemons,
        allPokemons,
        setAllPokemons,
        loading,
        setLoading,
        allTheNames,
        setAllTheNames,
        pokedex,
        setPokedex,
        showModal,
        setShowModal,
        answer,
        setAnswer,
        scoredTime,
        setScoredTime,
        readyToPlay,
        setReadyToPlay,
        showRegions,
        setShowRegions,
        getAllPokemons,
        handleOptions,
        scoredTime,
        setScoredTime,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
