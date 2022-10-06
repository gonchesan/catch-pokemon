import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { DoorLoader, DoorWrapper } from './DoorScreen.style';

const DoorScreen = () => {
  const { loading } = useContext(DataContext);
  const load = true;
  return (
    <DoorWrapper loadingDone={!loading}>
      <DoorLoader loadingDone={!loading}>
        <div class="big-circle"></div>
        <div class="small-circle"></div>
      </DoorLoader>
    </DoorWrapper>
  );
};

export default DoorScreen;
