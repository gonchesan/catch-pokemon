import { Navigate, Outlet } from "react-router-dom";

const RegionGuard = ({ isRegionSelected }) => {
  return isRegionSelected ? <Outlet /> : <Navigate to="/regions" />;
};

export default RegionGuard;
