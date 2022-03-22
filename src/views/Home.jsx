import WallpaperPlaying from "../assets/images/Background.jpg";
import PokedexPartLeft from "../assets/images/Pokedex-part-a.png";
import PokedexPartRight from "../assets/images/Pokedex-part-b.png";
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
  const returnData = (array, index) => {
    let dataToFind = array.find((item) => item.id === index);
    return dataToFind;
  };

  return (
    <ContainerGame>
      <BackgroundGame src={WallpaperPlaying} />
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
        {/* <PokedexMachine src={PokedexPartRight} /> */}
      </PokedexContainer>
      <OptionsContainer>
        {optionsToCatch ? (
          <>
            {optionsToCatch.map((index) => {
              return (
                <OptionWrapper
                  onClick={() =>
                    handleOptions(returnData(allTheNames, index).id)
                  }
                  key={index}
                >
                  <Pokeball>
                    <PokeballButton />
                  </Pokeball>
                  <OptionPokemon>
                    {returnData(allTheNames, index).name}
                  </OptionPokemon>
                </OptionWrapper>
              );
            })}
          </>
        ) : null}
        {/* <OptionWrapper>
          <Pokeball>
            <PokeballButton />
          </Pokeball>
          <OptionPokemon>Squirtle</OptionPokemon>
        </OptionWrapper>
        <OptionWrapper>
          <Pokeball>
            <PokeballButton />
          </Pokeball>
          <OptionPokemon>Pikachu</OptionPokemon>
        </OptionWrapper>
        <OptionWrapper>
          <Pokeball>
            <PokeballButton />
          </Pokeball>
          <OptionPokemon>Moltres</OptionPokemon>
        </OptionWrapper> */}
      </OptionsContainer>
    </ContainerGame>
  );
};

export default Home;
