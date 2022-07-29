import React from 'react';
import {
  Column,
  Modal,
  ModalBody,
  ModalButton,
  ModalContent,
  ModalGrid,
  ModalHeader,
} from './ModalEndGame.style';
import PokemonWatch from '../assets/images/Icon-Watch.svg';
import PokeBall from '../assets/images/Icon-Pokeball.svg';
import PokePoints from '../assets/images/icon-pokepoints.svg';
import { TimePipe } from '../pipes/timePipe';
import { useNavigate } from 'react-router-dom';

const ModalEndGame = ({ showModal, caughtPokemons, scoredTime }) => {
  let navigate = useNavigate();

  const backToMenu = () => {
    navigate('/menu');
  };
  return (
    <Modal visible={showModal}>
      <ModalContent>
        <ModalHeader>
          <h2>Game Over</h2>
        </ModalHeader>
        <ModalBody>
          <ModalGrid>
            <Column>
              <img src={PokeBall} />
              <span>
                <small>x</small> {caughtPokemons}
              </span>
            </Column>
            <Column>
              <img src={PokemonWatch} />
              <span>{TimePipe(scoredTime)}"</span>
            </Column>
            <Column>
              <span>Score</span>
              <span>
                <img src={PokePoints} />
                {caughtPokemons * Math.round(scoredTime / 100)}
              </span>
            </Column>
            <ModalButton onClick={backToMenu} secondary>
              Menu
            </ModalButton>
            <ModalButton>Retry</ModalButton>
          </ModalGrid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalEndGame;
