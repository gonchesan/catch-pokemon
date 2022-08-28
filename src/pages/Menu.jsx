import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//* Styles
import {
  BackButton,
  BackgroundLogin,
  ContainerLogin,
  FooterMenu,
  FormLogin,
  LogoLogin,
  MessageBox,
  OptionRegion,
} from './styles/Menu.style';

//* Assets
import WallpaperLogin from '../assets/images/wallpaper-login.jpg';
import KantoPoke from '../assets/images/pokedex-Kanto.png';
import JohtoPoke from '../assets/images/pokedex-johto.png';
import HoennPoke from '../assets/images/pokedex-hoenn.png';
import SinnohPoke from '../assets/images/pokedex-sinnoh.png';
import Logo from '../assets/images/logo-login.svg';
import CornerRibbon from '../components/CornerRibbon';
import TrophyIcon from '../assets/images/icon-Trophy.svg';
import Settings from '../assets/images/icon-settings.svg';
import { DataContext } from '../context/DataContext';
import HighScoreModal from '../components/HighScoreModal';
import { Button } from '../globalStyles';
import BackIcon from '../assets/images/back-icon.svg';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    region,
    setRegion,
    getAllPokemons,
    setIsRegionSelected,
    readyToPlay,
    setReadyToPlay,
    showRegions,
    setShowRegions,
  } = useContext(DataContext);
  const navigate = useNavigate();

  const showValue = (event) => setRegion(event.target.value);
  const checkboxHandler = (event) => {
    setReadyToPlay(event.target.checked);
  };
  const startPlay = () => {
    setIsRegionSelected(true);
    navigate('/');
    getAllPokemons();
  };

  const gameMode = (event) => {
    if (event.target.name === 'guest') {
      setShowRegions(true);
    }
  };

  return (
    <ContainerLogin>
      <HighScoreModal handleClose={() => setIsOpen(false)} isOpen={isOpen} />
      <CornerRibbon />
      <BackgroundLogin src={WallpaperLogin} />
      {showRegions && (
        <BackButton onClick={() => setShowRegions(false)}>
          <img src={BackIcon} alt="" />
        </BackButton>
      )}
      <LogoLogin src={Logo} alt="logo for login" />
      {!showRegions ? (
        <FormLogin>
          <Button onClick={gameMode} name="guest">
            Play as Guest
          </Button>
          <Button onClick={gameMode} name="login" secondary>
            Log In
          </Button>
        </FormLogin>
      ) : null}
      {showRegions ? (
        <div onChange={showValue}>
          <OptionRegion clicked={region === '1Gen'}>
            <img src={KantoPoke} alt="pokedex region" />
            <input
              type="radio"
              value="1Gen"
              name="Kanto"
              checked={region === 'Kanto'}
              onChange={checkboxHandler}
            />
            Kanto
          </OptionRegion>
          <OptionRegion clicked={region === '2Gen'}>
            <img src={JohtoPoke} alt="pokedex region" />
            <input
              type="radio"
              value="2Gen"
              name="Johto"
              checked={region === 'Johto'}
              onChange={checkboxHandler}
            />
            Johto
          </OptionRegion>
          <OptionRegion clicked={region === '3Gen'}>
            <img src={HoennPoke} alt="pokedex region" />
            <input
              type="radio"
              value="3Gen"
              name="Hoenn"
              checked={region === 'Hoenn'}
              onChange={checkboxHandler}
            />
            Hoenn
          </OptionRegion>
          <OptionRegion clicked={region === '4Gen'}>
            <img src={SinnohPoke} alt="pokedex region" />
            <input
              type="radio"
              value="4Gen"
              name="Sinnoh"
              checked={region === 'Sinnoh'}
              onChange={checkboxHandler}
            />
            Sinnoh
          </OptionRegion>

          {!readyToPlay ? (
            <MessageBox>Select a region to start playing</MessageBox>
          ) : (
            <Button onClick={startPlay}>Play</Button>
          )}
        </div>
      ) : null}

      <FooterMenu>
        <button onClick={() => setIsOpen(true)}>
          <img src={TrophyIcon} />
        </button>

        <button>
          <img src={Settings} />
        </button>
      </FooterMenu>
    </ContainerLogin>
  );
};

export default Menu;
