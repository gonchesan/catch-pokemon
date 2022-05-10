import React from "react";
import { BadgeIcon, BadgeScore, BadgeText, BadgeWrapper } from "./Score.style";
import PokeballIcon from "../assets/images/mdi_pokeball.svg";

const Score = ({ caughtPokemons }) => {
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
