import { BadgeIcon, BadgeScore, BadgeText, BadgeWrapper } from './Score.style';
import PokeballIcon from '../assets/images/mdi_pokeball.svg';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Score = () => {
  const { caughtPokemons } = useContext(DataContext);
  return (
    <BadgeScore>
      <span></span>
      <BadgeWrapper>
        <BadgeIcon src={PokeballIcon} />
        <BadgeText>{caughtPokemons} /10</BadgeText>
      </BadgeWrapper>
    </BadgeScore>
  );
};

export default Score;
