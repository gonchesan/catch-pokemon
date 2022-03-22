import { useState, useEffect } from "react";

import WebFont from "webfontloader";
import { GlobalStyles } from "./globalStyles";

import { BrowserRouter } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";

const App = () => {
  const [region, setRegion] = useState("");

  //----------------------------------------------
  const [pokemonToCatch, setPokemonToCatch] = useState();
  const [allTheNames, setAllTheNames] = useState({});
  const [optionsToCatch, setOptionsToCatch] = useState([]);
  const [kantoPokemons, setKantoPokemons] = useState({});
  const [pokedex, setPokedex] = useState([]);
  const [loading, setLoading] = useState(false);
  const [indexSelected, setIndexSelected] = useState();
  const [pokeOptions, setPokeOptions] = useState([]);

  const fetchPokemons = (limit) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`).then(
      (response) => response.json()
    );
  };

  const fetchPokemonData = (url) => {
    return fetch(url).then((response) => response.json());
  };

  const getAllPokemons = async () => {
    setLoading(true);
    let optionsName = [];

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
        setIndexSelected(newIndex);
        const item = all[newIndex];
        all.forEach((element) => {
          optionsName.push({ id: element.id, name: element.name });
        });
        setAllTheNames(optionsName);

        setPokemonToCatch(item);
        setKantoPokemons(all);
        setLoading(false);
        //EL ARRAY.length 0 no tiene que contar a la hora de recorrer el array
        //el nombre va a ser distinto a la hora de llamarlo .-

        //-----------------------------------------------------------------------
        getThreeOptions(item.id);
        console.log("ITEM:ID", item.id);
        // for (let i = 0; pokeOptions.length < 2; i++) {
        //   let newPokemonToAdd = randomId();
        //   if (!pokeOptions.includes(newIndex)) {
        //     // pokeOptions.push(newPokemonToAdd);
        //     pokeOptions.push(newPokemonToAdd);
        //   }
        // }
        setOptionsToCatch(getThreeOptions(item.id));
      });
  };

  const getThreeOptions = (newIndex) => {
    let arrayPokemonOption = [];
    for (let i = arrayPokemonOption.length; i < 2; i++) {
      if (!arrayPokemonOption.includes(newIndex)) {
        let newPokemonToAdd = randomId();
        arrayPokemonOption.push(newPokemonToAdd);
      }
    }
    arrayPokemonOption.push(newIndex);
    shuffle(arrayPokemonOption);
    return arrayPokemonOption;
  };

  const randomId = (remainingPokemons) => {
    if (remainingPokemons) {
      return Math.floor(Math.random() * remainingPokemons.length);
    } else {
      return Math.floor(Math.random() * 151);
    }
  };

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const startGame = () => {
    getAllPokemons();
  };

  //!llamo a todos los pokemon dentro de los 151,
  //! Tienen que estar dentro de los 151
  //! No se tienen que repetir entre las 3 opciones
  //! No tienen que estar dento del array de atrapados
  //*Se agregan las 3 opciones a un array de optionToChoose
  //?Se carga la imagen de uno, y las opciones para elegir
  //TODO Funcion para cambiar el orden dentro de los array.

  const handleOptions = (index) => {
    // + 1 para que coincida el index del pokedex con el index de los array que empieza en 0
    if (pokemonToCatch.id === index) {
      let clearPokemon = kantoPokemons.filter(
        (item) => item.id !== pokemonToCatch.id
      );
      setPokedex([...pokedex, pokemonToCatch]);
      setKantoPokemons(clearPokemon);
      console.log(clearPokemon.length);
      setOptionsToCatch([]);
      console.log("ATRAPADOOOOOOO. Remaining:", kantoPokemons.length);
      // console.log(pokemonToCatch.id);
    } else {
      console.log(pokeOptions);
      console.warn("Por ahi no es mi rey");
    }
  };

  useEffect(() => {
    if (kantoPokemons.length > 0) {
      let newIndex = randomId(kantoPokemons);
      console.log(kantoPokemons[newIndex].id);
      const item = kantoPokemons[newIndex];
      setPokemonToCatch(item);
      setOptionsToCatch(getThreeOptions(item.id));

      // getThreeOptions(item.id);
    } else {
      console.log("Se acabo el juego reeey");
    }
  }, [pokedex]);

  //* RETURN THE DATA CLEAR WITH THE REAL ID FROM POKEDEX
  const returnData = (array, index) => {
    let dataToFind = array.find((item) => item.id === index);
    return dataToFind;
  };

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
            path="/"
            element={
              <Login
                region={region}
                setRegion={setRegion}
                startGame={startGame}
              />
            }
          />
          <Route
            path="/home"
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
          {/* <button onClick={() => console.log(optionsToCatch)}>
            CHECKING OPTIONS NAME
          </button>
          <button onClick={() => console.log(allTheNames)}>testing</button>
          <button onClick={startGame}>Start game</button>
          {pokemonToCatch ? <h4>{pokemonToCatch.name}</h4> : null}
          {optionsToCatch ? (
            <>
              {optionsToCatch.map((index) => {
                return (
                  <button
                    onClick={() =>
                      handleOptions(returnData(allTheNames, index).id)
                    }
                    key={index}
                  >
                    {returnData(allTheNames, index).name}
                  </button>
                );
              })}
            </>
          ) : null}
          {pokemonToCatch ? (
            <img
              style={imgStyle}
              src={pokemonToCatch.sprites.other.home.front_default}
              alt={pokemonToCatch.name}
            />
          ) : null} */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
