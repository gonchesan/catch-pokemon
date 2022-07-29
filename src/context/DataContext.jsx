import { createContext, useEffect, useState } from 'react';

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
