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
  const [isRegionSelected, setIsRegionSelected] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [caughtPokemons, setCaughtPokemons] = useState(0);
  // const [genToFetch, SetGenToFetch] = useState({ quantity: 151, since: 0 });

  // * ----------------------------------------------
  const [pokemonToCatch, setPokemonToCatch] = useState();
  const [allTheNames, setAllTheNames] = useState({});
  const [optionsToCatch, setOptionsToCatch] = useState([]);
  const [kantoPokemons, setKantoPokemons] = useState({});
  const [tenPokemons, setTenPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [loading, setLoading] = useState(false);
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

    // 1-151
    // 152-251
    // fetchPokemons("151", "0")
    // fetchPokemons("100", "151")
    // fetchPokemons("135", "251")
    // fetchPokemons("135", "386")

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
        // let newIndex = randomId(all);
        let newIndex = randomId(
          generations[region].firstId,
          generations[region].lastId
        );
        //? Obtengo un array con 10 opciones para atrapar
        let array10 = getTenOptions();
        setTenPokemons(array10);
        console.log(array10);
        // const item = all[newIndex];
        const firstPokemon = all.find((poke) => poke.id === array10[0]);
        // console.log("INDEX =>", newIndex);
        // console.log(all);
        // const item = firstPokemon;

        all.forEach((element) => {
          dataFromAllPokemons.push({ id: element.id, name: element.name });
        });
        setAllTheNames(dataFromAllPokemons);

        setPokemonToCatch(firstPokemon);
        setKantoPokemons(all);

        setLoading(false);

        // console.log(array10);
        setOptionsToCatch(getThreeOptions(firstPokemon.id));
      });
    setStartGame(true);
  };

  const getThreeOptions = (newIndex) => {
    let arrayPokemonOption = [newIndex];
    let count = 1;
    while (count !== 3) {
      // el newIndex deberia devolver un numero
      // que se encuentre en el array /
      let newPokemonToAdd = randomId(
        generations[region].firstId,
        generations[region].lastId
      );
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
    let clearPokemon = tenPokemons.filter((item) => item !== pokemonToCatch.id);
    setPokedex([...pokedex, pokemonToCatch]);
    setTenPokemons(clearPokemon);
    if (pokemonToCatch.id === index) {
      setCaughtPokemons(caughtPokemons + 1);
    } else {
      //TODO Make animation or play an audio to display a wrong answer
      // console.warn("Por ahi no es mi rey");
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
      //Importantisimo poner los pokemonsRemaining como parametro
      // !el newIndex deberia devolver un numero
      // !que se encuentre en el array / y que NO haya atrapado
      // let newIndex;
      // newIndex = randomId(
      //   generations[region].firstId,
      //   generations[region].lastId
      // );

      // console.warn("kantoPokemons =>", kantoPokemons);
      // console.warn("kantoPokemons length =>", kantoPokemons.length);
      // Es DECIR del 1 al 151

      const item = kantoPokemons.find((poke) => poke.id === tenPokemons[0]);
      // console.log(item);
      // if (item) {
      setPokemonToCatch(item);
      // } else {
      // console.warn("NO EXISTE UN POKEMON CON ESE ID");
      console.warn(item);
      // }
      console.warn("new Index =>", tenPokemons[0]);
      console.warn("objeto{} de pokemon a elegir =>", item);
      console.warn("ID de pokemon a elegir =>", item.name);
      setOptionsToCatch(getThreeOptions(item.id));
      console.log(tenPokemons);
    } else {
      console.log("Se acabo el juego reeey");
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
