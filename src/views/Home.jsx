import WallpaperPlaying from "../assets/images/Background.jpg";
import PokedexPartLeft from "../assets/images/Pokedex-part-a.png";
import PokedexPartRight from "../assets/images/Pokedex-part-b.png";
import {
  BackgroundGame,
  ContainerGame,
  OptionPokemon,
  OptionsContainer,
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
        {/* //TODO     AGREGAR un contenedor para el boton de la opcion y englobar OptionPokemon, Pokeball */}
        <Pokeball>
          <PokeballButton />
        </Pokeball>
        <OptionPokemon>Squirtle</OptionPokemon>
        <OptionPokemon>Pikachu</OptionPokemon>
        <OptionPokemon>Moltres</OptionPokemon>
      </OptionsContainer>
    </ContainerGame>
  );
};

export default Home;
