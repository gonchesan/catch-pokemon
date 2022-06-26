//* Components
import Score from '../components/Score';
import Stopwatch from '../components/Stopwatch';

//* Functions
import { returnData } from '../utils/functions';

//* Styles
import {
  BackgroundGame,
  ContainerGame,
  OptionPokemon,
  OptionsContainer,
  OptionWrapper,
  Pokeball,
  PokeballButton,
  PokedexContainer,
  PokedexMachine,
  PokedexMachineRight,
  PokedexScreen,
  PokemonFigure,
} from './styles/RoutePokemon.style';

//* Assets
import WallpaperPlaying from '../assets/images/Background.jpg';
import PokedexPartLeft from '../assets/images/Pokedex-part-a.png';
import PokedexPartRight from '../assets/images/Pokedex-part-b.png';
import ModalEndGame from '../components/ModalEndGame';
import { useState } from 'react';

const RoutePokemon = ({
  pokemonToCatch,
  optionsToCatch,
  allTheNames,
  handleOptions,
  startGame,
  caughtPokemons,
  loading,
  roundPokemons,
  showModal,
  answer,
}) => {
  const [scoredTime, setScoredTime] = useState(0);

  return (
    <ContainerGame>
      {showModal && startGame ? (
        <ModalEndGame
          scoredTime={scoredTime}
          caughtPokemons={caughtPokemons}
          showModal={showModal}
        />
      ) : null}

      <BackgroundGame src={WallpaperPlaying} />
      <Score caughtPokemons={caughtPokemons} />
      <Stopwatch
        startGame={startGame}
        loading={loading}
        roundPokemons={roundPokemons}
        setScoredTime={setScoredTime}
      />
      {loading ? (
        <div>
          {/* //TODO Make a charging screen */}
          <ModalEndGame />
        </div>
      ) : (
        <>
          <PokedexContainer>
            <PokedexScreen answer={answer} />
            {pokemonToCatch ? (
              <PokemonFigure
                draggable="false"
                answer={answer}
                src={pokemonToCatch.sprites.other.home.front_default}
                alt={pokemonToCatch.name}
              />
            ) : null}
            <PokedexMachine src={PokedexPartLeft} alt="pokedex" />
            <PokedexMachineRight src={PokedexPartRight} alt="pokedexPartB" />
          </PokedexContainer>
          <OptionsContainer>
            {optionsToCatch ? (
              <>
                {optionsToCatch.map((index) => {
                  return (
                    <OptionWrapper
                      onClick={() =>
                        handleOptions(returnData(allTheNames, index)?.id)
                      }
                      key={index}
                    >
                      <Pokeball>
                        <PokeballButton />
                      </Pokeball>
                      <OptionPokemon>
                        {returnData(allTheNames, index)?.name}
                      </OptionPokemon>
                    </OptionWrapper>
                  );
                })}
              </>
            ) : null}
          </OptionsContainer>
        </>
      )}
    </ContainerGame>
  );
};

export default RoutePokemon;
