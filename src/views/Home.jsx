import WallpaperPlaying from "../assets/images/Background.jpg";
import PokedexPartLeft from "../assets/images/Pokedex-part-a.png";
import PokedexPartRight from "../assets/images/Pokedex-part-b.png";
import Stopwatch from "../components/Stopwatch";
import { returnData } from "../utils/functions";
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
} from "./Home.style";

const Home = ({
  region,
  pokemonToCatch,
  optionsToCatch,
  allTheNames,
  handleOptions,
}) => {
  return (
    <ContainerGame>
      <BackgroundGame src={WallpaperPlaying} />
      <Stopwatch />
      <PokedexContainer>
        <PokedexScreen />
        {pokemonToCatch ? (
          <PokemonFigure
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
    </ContainerGame>
  );
};

export default Home;
