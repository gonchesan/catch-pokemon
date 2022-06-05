import { Navigate, Outlet } from "react-router-dom";

const RegionGuard = ({ isRegionSelected }) => {
  return isRegionSelected ? <Outlet /> : <Navigate to="/menu" />;
};

export default RegionGuard;
