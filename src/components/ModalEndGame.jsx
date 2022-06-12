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
import PokemonWatch from '../assets/images/poke-watch.png';
import PokeBall from '../assets/images/pokeball-sprite.png';
const ModalEndGame = ({ showModal }) => {
  return (
    <Modal visible={showModal}>
      <ModalContent>
        <ModalHeader>
          <h2>Game Over</h2>
        </ModalHeader>
        <ModalBody>
          <ModalGrid>
            <Column>
              <img height="40px" src={PokeBall} />
              <span> 7/10</span>
              {/* <span> 7/10 Pokemons</span> */}
            </Column>
            <Column>
              <img height="40px" src={PokemonWatch} />
              <span> 17:00"</span>
              {/* <span> 17:00" | timePipe</span> */}
            </Column>
            <Column>
              <p>Score: 6000 [Poké | currencyPipe]</p>
            </Column>
            <ModalButton secondary>Menu</ModalButton>
            <ModalButton>Retry</ModalButton>
          </ModalGrid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalEndGame;
