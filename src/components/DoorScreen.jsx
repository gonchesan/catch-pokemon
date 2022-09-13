import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { DoorLoader, DoorWrapper } from './DoorScreen.style';

const DoorScreen = () => {
  const { loading } = useContext(DataContext);
  return (
    <DoorWrapper loadingDone={!loading}>
      <DoorLoader loadingDone={!loading}></DoorLoader>
    </DoorWrapper>
  );
};

export default DoorScreen;
