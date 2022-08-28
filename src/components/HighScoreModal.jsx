import { useEffect, useRef } from 'react';
import {
  Modal,
  ModalButtonClose,
  ModalContent,
  ModalHeader,
} from '../globalStyles';
import {
  DataHighScore,
  ListHighScore,
  ResultHighScore,
} from './HighScoreModal.style';
import PokePoints from '../assets/images/icon-pokepoints.svg';

import ReactPortal from './ReactPortal';

const users = [
  { name: 'Leanne Graham', score: 556 },
  { name: 'Ervin Howell', score: 6132 },
  { name: 'Clementine Bauch', score: 423 },
  { name: 'Patricia Lebsack', score: 554 },
  { name: 'Chelsey Dietrich', score: 663 },
  { name: 'Dennis Schulist', score: 7775 },
  { name: 'Kurtis Weissnat', score: 1009 },
  { name: 'Nicholas Runolfsdottir', score: 2398 },
  { name: 'Glenna Reichert', score: 140 },
  { name: 'Clementina DuBuque', score: 198 },
];

const HighScoreModal = ({ isOpen, handleClose }) => {
  const wrapperHighScore = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      isOpen &&
      wrapperHighScore.current &&
      wrapperHighScore.current === event.target
        ? handleClose()
        : null;
    };
    document.body.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.body.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="modal-highscore">
      <Modal ref={wrapperHighScore}>
        <ModalContent>
          <ModalButtonClose onClick={handleClose}>✖</ModalButtonClose>
          <ModalHeader>
            <h2>High Score</h2>
          </ModalHeader>
          <ListHighScore>
            {users.map((user, index) => {
              return (
                // Puesto / Foto perfil / Nombre {} / Score
                <ResultHighScore key={index}>
                  <span>{index + 1}</span>
                  <DataHighScore>
                    <img />
                    <p>{user.name}</p>
                  </DataHighScore>
                  <span>
                    <img src={PokePoints} />
                    {user.score}
                  </span>
                </ResultHighScore>
              );
            })}
          </ListHighScore>
        </ModalContent>
      </Modal>
    </ReactPortal>
  );
};

export default HighScoreModal;
