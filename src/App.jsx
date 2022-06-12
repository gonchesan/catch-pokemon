import { useState, useEffect } from 'react';

//* Fonts and global styles
import WebFont from 'webfontloader';
import { GlobalStyles } from './globalStyles';

//* Views game
import Menu from './pages/Menu';
import RoutePokemon from './pages/RoutePokemon';

//* Router dependency
import { BrowserRouter, Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

//* Handle Route by guard
import RegionGuard from './guards/RegionGuard';

//* Functions and services
import { randomId, shuffle } from './utils/functions';
import { fetchPokemonData, fetchPokemons } from './utils/services';

//* Assets sounds
import soundError from './assets/audio/wrongAnswer.mp3';
import soundSuccess from './assets/audio/rightAnswer.mp3';
import ModalEndGame from './components/ModalEndGame';

const App = () => {
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

  //* Object ternary operator
  const generations = {
    '1Gen': { quantity: '151', since: '0', firstId: 1, lastId: 150 },
    '2Gen': { quantity: '100', since: '151', firstId: 151, lastId: 251 },
    '3Gen': { quantity: '135', since: '251', firstId: 252, lastId: 386 },
    '4Gen': { quantity: '107', since: '386', firstId: 387, lastId: 493 },
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
    let clearPokemon = roundPokemons.filter(
      (item) => item !== pokemonToCatch.id,
    );
    setPokedex([...pokedex, pokemonToCatch]);
    setRoundPokemons(clearPokemon);
    if (pokemonToCatch.id === index) {
      setCaughtPokemons(caughtPokemons + 1);
      playAudio(soundSuccess);
    } else {
      //TODO Make animation or play an audio to display a wrong answer
      playAudio(soundError);
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

    WebFont.load({
      google: {
        families: ['Saira Condensed', 'ZCOOL QingKe HuangYou'],
      },
    });
  }, []);

  useEffect(() => {
    if (roundPokemons.length > 0) {
      const item = allPokemons.find((poke) => poke.id === roundPokemons[0]);
      setPokemonToCatch(item);
      setOptionsToCatch(getThreeOptions(item.id));
    } else {
      if (startGame) {
        setShowModal(true);
        //TODO the game is over
      }
    }
  }, [pokedex]);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="/menu"
            element={
              <Menu
                region={region}
                setRegion={setRegion}
                getAllPokemons={getAllPokemons}
                setIsRegionSelected={setIsRegionSelected}
              />
            }
          />
          <Route element={<RegionGuard isRegionSelected={isRegionSelected} />}>
            <Route
              path="/"
              element={
                <RoutePokemon
                  pokemonToCatch={pokemonToCatch}
                  optionsToCatch={optionsToCatch}
                  allTheNames={allTheNames}
                  handleOptions={handleOptions}
                  startGame={startGame}
                  caughtPokemons={caughtPokemons}
                  loading={loading}
                  roundPokemons={roundPokemons}
                  showModal={showModal}
                />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/menu" />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
