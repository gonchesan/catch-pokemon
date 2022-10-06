import React, { useContext } from 'react';
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
import { DataContext } from '../context/DataContext';
import ReactPortal from './ReactPortal';
import { useNavigate } from 'react-router-dom';
const ModalEndGame = () => {
  // const { showModal, caughtPokemons, scoredTime } = useContext(DataContext);
  const {
    showModal,
    caughtPokemons,
    scoredTime,
    setRegion,
    setIsRegionSelected,
    setCaughtPokemons,
    setStartGame,
    setOptionsToCatch,
    setRoundPokemons,
    setLoading,
    setAllTheNames,
    setPokedex,
    setReadyToPlay,
    setShowRegions,
    setTime,
    setRunning,
    setShowModal,
  } = useContext(DataContext);

  const navigate = useNavigate();
  const goToMenu = () => {
    setRegion('');
    setIsRegionSelected(false);
    setStartGame(false);
    setCaughtPokemons(0);
    setOptionsToCatch([]);
    setRoundPokemons([]);
    setLoading(false);
    setAllTheNames({});
    setPokedex([]);
    setReadyToPlay(false);
    setShowRegions(false);
    setTime(30000);
    setRunning(false);
    setShowModal(false);
    navigate('/menu');
  };
  const retry = () => {};
  return (
    <ReactPortal wrapperId="modal-endgame">
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
                  {caughtPokemons * scoredTime}
                </span>
              </Column>
              <ModalButton secondary onClick={goToMenu}>
                Menu
              </ModalButton>
              <ModalButton onClick={retry}>Retry</ModalButton>
            </ModalGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </ReactPortal>
  );
};

export default ModalEndGame;
