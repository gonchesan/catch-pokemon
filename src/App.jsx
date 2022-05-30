import { useState, useEffect } from "react";

import WebFont from "webfontloader";
import { GlobalStyles } from "./globalStyles";

import { BrowserRouter } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";
import RegionGuard from "./guards/RegionGuard";
import { randomId, shuffle } from "./utils/functions";
import { fetchPokemonData, fetchPokemons } from "./utils/services";

import soundError from "./assets/audio/wrongAnswer.mp3";
import soundSuccess from "./assets/audio/rightAnswer.mp3";

const App = () => {
  const [region, setRegion] = useState(""); //?  Region to play
  const [isRegionSelected, setIsRegionSelected] = useState(false); //? Region selected, ready to play
  const [startGame, setStartGame] = useState(false); //? Boolean to start the game
  const [caughtPokemons, setCaughtPokemons] = useState(0); //? ????

  // * ----------------------------------------------
  const [pokemonToCatch, setPokemonToCatch] = useState(); //!! !!!!!!!!!!!!!
  const [allTheNames, setAllTheNames] = useState({}); //!! !!!!!!!!!!!!!
  const [optionsToCatch, setOptionsToCatch] = useState([]); //? 3 options to choose
  const [kantoPokemons, setKantoPokemons] = useState({}); //TODO Name
  const [tenPokemons, setTenPokemons] = useState([]); //? 10 Pokemons to catch
  const [pokedex, setPokedex] = useState([]); //? ???
  const [loading, setLoading] = useState(false); //! !!!!!!!!!!!!!!!!!
  // * ----------------------------------------------

  const generations = {
    "1Gen": { quantity: "151", since: "0", firstId: 1, lastId: 150 },
    "2Gen": { quantity: "100", since: "151", firstId: 151, lastId: 251 },
    "3Gen": { quantity: "135", since: "251", firstId: 252, lastId: 386 },
    "4Gen": { quantity: "107", since: "386", firstId: 387, lastId: 493 },
  };

  const getAllPokemons = async () => {
    setLoading(true);
    let dataFromAllPokemons = [];
    fetchPokemons(generations[region].quantity, generations[region].since)
      .then(async (pokemons) => {
        const all = await Promise.all(
          pokemons.results.map(async (pokemon) => {
            return await fetchPokemonData(pokemon.url);
          })
        );
        return all;
      })
      .then((all) => {
        //? Obtengo un array con 10 opciones para atrapar
        let array10 = getTenOptions();
        setTenPokemons(array10);
        const firstPokemon = all.find((poke) => poke.id === array10[0]);
        all.forEach((element) => {
          dataFromAllPokemons.push({ id: element.id, name: element.name });
        });
        setAllTheNames(dataFromAllPokemons);
        setPokemonToCatch(firstPokemon);
        setKantoPokemons(all);
        setLoading(false);
        setOptionsToCatch(getThreeOptions(firstPokemon.id));
      });
    setStartGame(true);
  };

  const getThreeOptions = (newIndex) => {
    let arrayPokemonOption = [newIndex];
    let count = 1;
    while (count !== 3) {
      let newPokemonToAdd = randomId(
        generations[region].firstId,
        generations[region].lastId
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

  const playAudio = (audioOption) => {
    new Audio(audioOption).play();
  };

  const handleOptions = (index) => {
    let clearPokemon = tenPokemons.filter((item) => item !== pokemonToCatch.id);
    setPokedex([...pokedex, pokemonToCatch]);
    setTenPokemons(clearPokemon);
    if (pokemonToCatch.id === index) {
      setCaughtPokemons(caughtPokemons + 1);
      playAudio(soundSuccess);
    } else {
      //TODO Make animation or play an audio to display a wrong answer
      playAudio(soundError);
    }
  };

  const getTenOptions = () => {
    let arrayTenToWin = [];
    let newIndex;
    for (let i = 0; i < 10; i++) {
      newIndex = randomId(
        generations[region].firstId,
        generations[region].lastId
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

  useEffect(() => {
    if (tenPokemons.length > 0) {
      const item = kantoPokemons.find((poke) => poke.id === tenPokemons[0]);
      setPokemonToCatch(item);
      setOptionsToCatch(getThreeOptions(item.id));
    } else {
      //TODO the game is over
    }
  }, [pokedex]);

  //Fn import font via webfontloader
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Saira Condensed", "ZCOOL QingKe HuangYou"],
      },
    });
  }, []);

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="/regions"
            element={
              <Login
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
                <Home
                  pokemonToCatch={pokemonToCatch}
                  optionsToCatch={optionsToCatch}
                  allTheNames={allTheNames}
                  handleOptions={handleOptions}
                  startGame={startGame}
                  caughtPokemons={caughtPokemons}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
