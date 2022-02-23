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
  const [region, setRegion] = useState(false);

  const handleRegion = () => {
    setRegion(!region);
  };

  return (
    <ContainerLogin>
      <BackgroundLogin src={WallpaperLogin} />
      <LogoLogin src={Logo} alt="logo for login" />
      <OptionRegion clicked={region}>
        <img src={KantoPoke} alt="pokedex region" />
        <input type="checkbox" onClick={handleRegion} />
        Kanto
      </OptionRegion>
      <OptionRegion>
        <img src={JohtoPoke} alt="pokedex region" />
        <input type="checkbox" onClick={handleRegion} />
        Johto
      </OptionRegion>
      <OptionRegion>
        <img src={HoennPoke} alt="pokedex region" />
        <input type="checkbox" onClick={handleRegion} />
        Hoenn
      </OptionRegion>
      <OptionRegion>
        <img src={SinnohPoke} alt="pokedex region" />
        <input type="checkbox" onClick={handleRegion} />
        Sinnoh
      </OptionRegion>

      <MessageBox>Select a region to start playing</MessageBox>
    </ContainerLogin>
  );
};

export default Login;
