import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { DataContext } from '../context/DataContext';

const RegionGuard = () => {
  const { isRegionSelected } = useContext(DataContext);
  return isRegionSelected ? <Outlet /> : <Navigate to="/menu" />;
};

export default RegionGuard;
