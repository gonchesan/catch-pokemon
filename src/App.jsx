import { useEffect } from 'react';

//* Fonts and global styles
import WebFont from 'webfontloader';
import { GlobalStyles } from './globalStyles';

//* Views game
import Menu from './pages/Menu';
import RoutePokemon from './pages/RoutePokemon';

//* Router dependency
import { BrowserRouter, Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

//* Handle Route by guard
import RegionGuard from './guards/RegionGuard';

import { DataProvider } from './context/DataContext';

const App = () => {
  //Fn import font via webfontloader
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Saira Condensed', 'ZCOOL QingKe HuangYou'],
      },
    });
  }, []);

  return (
    <>
      <GlobalStyles />
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/menu" element={<Menu />} />
            <Route element={<RegionGuard />}>
              <Route path="/" element={<RoutePokemon />} />
            </Route>
            <Route path="*" element={<Navigate to="/menu" />}></Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
};

export default App;
