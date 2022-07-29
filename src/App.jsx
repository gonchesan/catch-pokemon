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
import { DataProvider } from './context/DataContext';

const App = () => {
  // const [region, setRegion] = useState(''); //?  Region to play
  // const [isRegionSelected, setIsRegionSelected] = useState(false); //? Region selected, ready to play
  // const [startGame, setStartGame] = useState(false); //? Boolean to start the game and redirect
  // const [caughtPokemons, setCaughtPokemons] = useState(0); //? The Score: Number of caught pokemons
  // const [pokemonToCatch, setPokemonToCatch] = useState(); //? The right answer: Pokemon selected to play
  // const [optionsToCatch, setOptionsToCatch] = useState([]); //? 3 options to choose
  // const [roundPokemons, setRoundPokemons] = useState([]); //? 10 Pokemons to catch per game
  // const [allPokemons, setAllPokemons] = useState({}); //? All the pokemons of the selected generation
  // const [loading, setLoading] = useState(false); //? Boolean to know if the info is being loaded
  // const [allTheNames, setAllTheNames] = useState({}); //? Data cleaned to play: T he correct name and id
  // const [pokedex, setPokedex] = useState([]); //? Caught pokemons
  // const [showModal, setShowModal] = useState(false); //? Modal game over
  // const [answer, setAnswer] = useState(''); //? Set the answer correct or incorrect

  // //* Object ternary operator
  // const generations = {
  //   '1Gen': { quantity: '151', since: '0', firstId: 1, lastId: 151 },
  //   '2Gen': { quantity: '100', since: '151', firstId: 152, lastId: 251 },
  //   '3Gen': { quantity: '135', since: '251', firstId: 252, lastId: 386 },
  //   '4Gen': { quantity: '108', since: '386', firstId: 387, lastId: 494 },
  // };

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
    <>
      <GlobalStyles />
      <BrowserRouter>
        <DataProvider>
          <Routes>
            <Route path="/menu" element={<Menu />} />
            <Route element={<RegionGuard />}>
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
                    answer={answer}
                  />
                }
              />
            </Route>
            <Route path="*" element={<Navigate to="/menu" />}></Route>
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
