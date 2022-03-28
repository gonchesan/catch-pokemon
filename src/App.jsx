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

const App = () => {
  const [region, setRegion] = useState("");
  const [isRegionSelected, SetIsRegionSelected] = useState(false);

  // * ----------------------------------------------
  const [pokemonToCatch, setPokemonToCatch] = useState();
  const [allTheNames, setAllTheNames] = useState({});
  const [optionsToCatch, setOptionsToCatch] = useState([]);
  const [kantoPokemons, setKantoPokemons] = useState({});
  const [pokedex, setPokedex] = useState([]);
  const [loading, setLoading] = useState(false);
  // * ----------------------------------------------

  const getAllPokemons = async () => {
    setLoading(true);
    let dataFromAllPokemons = [];

    fetchPokemons("151")
      .then(async (pokemons) => {
        const all = await Promise.all(
          pokemons.results.map(async (pokemon) => {
            return await fetchPokemonData(pokemon.url);
          })
        );
        return all;
      })
      .then((all) => {
        let newIndex = randomId(all);
        const item = all[newIndex];
        all.forEach((element) => {
          dataFromAllPokemons.push({ id: element.id, name: element.name });
        });
        setAllTheNames(dataFromAllPokemons);

        setPokemonToCatch(item);
        setKantoPokemons(all);
        setLoading(false);

        setOptionsToCatch(getThreeOptions(item.id));
      });
  };

  const getThreeOptions = (newIndex) => {
    let arrayPokemonOption = [newIndex];
    let count = 1;
    while (count !== 3) {
      let newPokemonToAdd = randomId();
      if (newPokemonToAdd !== newIndex) {
        // deberia separar los valores de getThreeOptions y el item.id por otro
        if (!arrayPokemonOption.includes(newPokemonToAdd)) {
          arrayPokemonOption.push(newPokemonToAdd);
          count++;
        }
      }
    }
    shuffle(arrayPokemonOption);
    return arrayPokemonOption;
  };

  const handleOptions = (index) => {
    if (pokemonToCatch.id === index) {
      let clearPokemon = kantoPokemons.filter(
        (item) => item.id !== pokemonToCatch.id
      );
      setPokedex([...pokedex, pokemonToCatch]);
      setKantoPokemons(clearPokemon);
      console.log(clearPokemon.length);
      //! PROBE SACANDO este setOptions TO CATHC
      // setOptionsToCatch([]);
      console.log("ATRAPADOOOOOOO. Remaining:", kantoPokemons.length);
      // console.log(pokemonToCatch.id);
    } else {
      console.log(optionsToCatch);
      console.warn("Por ahi no es mi rey");
    }
  };
  console.log("ID's de las opciones", optionsToCatch);

  useEffect(() => {
    if (kantoPokemons.length > 0) {
      //Importantisimo poner los pokemonsRemaining como parametro
      let newIndex = randomId(kantoPokemons);
      console.warn("ID de pokemon a elegir =>", kantoPokemons[newIndex]);
      // Es DECIR del 1 al 151

      const item = kantoPokemons[newIndex];
      setPokemonToCatch(item);
      setOptionsToCatch(getThreeOptions(item.id));
    } else {
      console.log("Se acabo el juego reeey");
    }
  }, [pokedex]);

  //? import font via webfontloader
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Saira Condensed"],
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
                SetIsRegionSelected={SetIsRegionSelected}
              />
            }
          />
          <Route element={<RegionGuard isRegionSelected={isRegionSelected} />}>
            <Route
              path="/"
              element={
                <Home
                  region={region}
                  pokemonToCatch={pokemonToCatch}
                  optionsToCatch={optionsToCatch}
                  allTheNames={allTheNames}
                  handleOptions={handleOptions}
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
