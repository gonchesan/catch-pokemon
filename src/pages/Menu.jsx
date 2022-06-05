import { useState } from "react";
import { useNavigate } from "react-router-dom";

//* Styles
import {
  BackgroundLogin,
  ContainerLogin,
  LogoLogin,
  MessageBox,
  OptionRegion,
  StartButton,
} from "./styles/Menu.style";

//* Assets
import WallpaperLogin from "../assets/images/wallpaper-login.jpg";
import KantoPoke from "../assets/images/pokedex-Kanto.png";
import JohtoPoke from "../assets/images/pokedex-johto.png";
import HoennPoke from "../assets/images/pokedex-hoenn.png";
import SinnohPoke from "../assets/images/pokedex-sinnoh.png";
import Logo from "../assets/images/logo-login.svg";

const Menu = ({ region, setRegion, getAllPokemons, setIsRegionSelected }) => {
  const [readyToPlay, setReadyToPlay] = useState(false);

  const navigate = useNavigate();

  const showValue = (event) => setRegion(event.target.value);
  const checkboxHandler = (event) => {
    setReadyToPlay(event.target.checked);
  };
  //Navegar a Home
  const startPlay = () => {
    setIsRegionSelected(true);
    navigate("/");
    getAllPokemons();
  };
  // 1-151
  // 152-251
  // 252-386
  // 387-493
  return (
    <ContainerLogin>
      <BackgroundLogin src={WallpaperLogin} />
      <LogoLogin src={Logo} alt="logo for login" />
      <div onChange={showValue}>
        <OptionRegion clicked={region === "1Gen"}>
          <img src={KantoPoke} alt="pokedex region" />
          <input
            type="radio"
            value="1Gen"
            name="Kanto"
            checked={region === "Kanto"}
            onChange={checkboxHandler}
          />
          Kanto
        </OptionRegion>
        <OptionRegion clicked={region === "2Gen"}>
          <img src={JohtoPoke} alt="pokedex region" />
          <input
            type="radio"
            value="2Gen"
            name="Johto"
            checked={region === "Johto"}
            onChange={checkboxHandler}
          />
          Johto
        </OptionRegion>
        <OptionRegion clicked={region === "3Gen"}>
          <img src={HoennPoke} alt="pokedex region" />
          <input
            type="radio"
            value="3Gen"
            name="Hoenn"
            checked={region === "Hoenn"}
            onChange={checkboxHandler}
          />
          Hoenn
        </OptionRegion>
        <OptionRegion clicked={region === "4Gen"}>
          <img src={SinnohPoke} alt="pokedex region" />
          <input
            type="radio"
            value="4Gen"
            name="Sinnoh"
            checked={region === "Sinnoh"}
            onChange={checkboxHandler}
          />
          Sinnoh
        </OptionRegion>
      </div>
      {!readyToPlay ? (
        <MessageBox>Select a region to start playing</MessageBox>
      ) : (
        <StartButton onClick={startPlay}>Play</StartButton>
      )}
    </ContainerLogin>
  );
};

export default Menu;
