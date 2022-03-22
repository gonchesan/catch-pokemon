import styled from "styled-components";
import { keyframes } from "styled-components";

export const ContainerGame = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const BackgroundGame = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: blueviolet;
  object-fit: cover;
`;

export const PokedexContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
`;

export const PokedexMachine = styled.img`
  z-index: 1;
  width: 17em;
  position: relative;
`;

export const PokedexMachineRight = styled.img`
  z-index: 1;
  height: 18.5em;
  position: absolute;
  bottom: 1em;
  right: -73%;
`;

export const PokedexScreen = styled.div`
  position: absolute;
  background-color: #3398da;
  border-radius: 7px;
  width: 11em;
  left: calc(50% - 6.3em);
  bottom: calc(50% - 2.7em);
  z-index: 5;
  height: 8em;
`;

export const OptionsContainer = styled.div`
  z-index: 55;
  width: 85vw;
  height: 8em;
`;

export const OptionPokemon = styled.button`
  float: right;
  width: 80%;
  height: 2.65rem;
  text-align: center;
  font-size: 1.3rem;
  text-transform: capitalize;
  line-height: 2.2rem;
  vertical-align: middle;
  color: #ecf7fd;
  text-shadow: 1px 1px 0px #807f84;
  background: #262626;
  border: 2.5px solid #f8f8f8;
  box-shadow: 0px 0px 0px 2px #262626, inset 0px 0px 0px 2px #131313;
  border-radius: 13px;
  transition: 0.3s all;

  &:hover {
    background: #787878;
  }
`;

const shake = keyframes`
   0 { transform: translate(0, 0) rotate(0); }
    20% { transform: translate(-6px, 0) rotate(-20deg); }
    30% { transform: translate(6px, 0) rotate(20deg); }
    50% { transform: translate(-6px, 0) rotate(-10deg); }
    60% { transform: translate(6px, 0) rotate(10deg); }
    100% { transform: translate(0, 0) rotate(0); }
`;

export const Pokeball = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
  background: #fff;
  border: 2.75px solid #404040;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset -5px 5px 0 5px #ccc;
  animation: ${shake} 2s linear infinite;
  animation-play-state: paused;

  &:hover {
    animation-play-state: running;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
  }

  &::before {
    background-color: #f85038;
    width: 100%;
    height: 50%;
  }

  &::after {
    top: calc(50% - 1px);
    width: 100%;
    height: 2px;
    background: #404040;
  }
`;

const blink = keyframes`
  from { background: #eee;}
    to { background: #dc0a2d; }
`;

export const PokeballButton = styled.span`
  position: absolute;
  top: calc(50% - 2px);
  left: calc(50% - 2px);
  width: 4px;
  height: 4px;
  background: #fff;
  border: 1px solid #7f8c8d;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 0 0 2px #404040;
  animation: ${blink} 0.5s alternate infinite;
  animation-play-state: paused;

  &:hover {
    animation-play-state: running;
  }
`;

export const OptionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0.75rem;

  &:hover {
    & ${OptionPokemon} {
      background: #787878;
    }
    & ${Pokeball}, ${PokeballButton} {
      animation-play-state: running;
    }
  }
`;

export const PokemonFigure = styled.img`
  position: absolute;
  border-radius: 7px;
  width: 11.5em;
  left: calc(50% - 6.6em);
  bottom: calc(50% - 2.5em);
  z-index: 5;
  height: 8.15em;
  object-fit: contain;
  filter: brightness(0%);
`;
