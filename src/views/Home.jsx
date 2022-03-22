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
} from "./Home.style";

const Home = ({ region }) => {
  return (
    <ContainerGame>
      <BackgroundGame src={WallpaperPlaying} />
      <PokedexContainer>
        <PokedexScreen />
        <PokedexMachine src={PokedexPartLeft} alt="pokedex" />
        <PokedexMachineRight src={PokedexPartRight} alt="pokedexPartB" />
        {/* <PokedexMachine src={PokedexPartRight} /> */}
      </PokedexContainer>
      <OptionsContainer>
        <OptionWrapper>
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
        </OptionWrapper>
      </OptionsContainer>
    </ContainerGame>
  );
};

export default Home;
