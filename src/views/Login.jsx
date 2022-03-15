import {
  BackgroundLogin,
  ContainerLogin,
  LogoLogin,
  MessageBox,
  OptionRegion,
} from "./Login.style";
import React, { useState } from "react";
import WallpaperLogin from "../assets/images/wallpaper-login.jpg";
import KantoPoke from "../assets/images/pokedex-Kanto.png";
import JohtoPoke from "../assets/images/pokedex-johto.png";
import HoennPoke from "../assets/images/pokedex-hoenn.png";
import SinnohPoke from "../assets/images/pokedex-sinnoh.png";
import Logo from "../assets/images/logo-login.svg";

const Login = () => {
  const [region, setRegion] = useState("");

  const handleRegion = () => {
    setRegion(!region);
  };
  console.log(region);
  const showValue = (event) => setRegion(event.target.value);
  return (
    <ContainerLogin>
      <BackgroundLogin src={WallpaperLogin} />
      <LogoLogin src={Logo} alt="logo for login" />
      <div onChange={showValue}>
        <OptionRegion clicked={region === "Kanto"}>
          <img src={KantoPoke} alt="pokedex region" />
          <input
            type="radio"
            value="Kanto"
            name="Kanto"
            checked={region === "Kanto"}
          />
          Kanto
        </OptionRegion>
        <OptionRegion clicked={region === "Johto"}>
          <img src={JohtoPoke} alt="pokedex region" />
          <input
            type="radio"
            value="Johto"
            name="Johto"
            checked={region === "Johto"}
          />
          Johto
        </OptionRegion>
        <OptionRegion clicked={region === "Hoenn"}>
          <img src={HoennPoke} alt="pokedex region" />
          <input
            type="radio"
            value="Hoenn"
            name="Hoenn"
            checked={region === "Hoenn"}
          />
          Hoenn
        </OptionRegion>
        <OptionRegion clicked={region === "Sinnoh"}>
          <img src={SinnohPoke} alt="pokedex region" />
          <input
            type="radio"
            value="Sinnoh"
            name="Sinnoh"
            checked={region === "Sinnoh"}
          />
          Sinnoh
        </OptionRegion>
      </div>

      <MessageBox>Select a region to start playing</MessageBox>
    </ContainerLogin>
  );
};

export default Login;
