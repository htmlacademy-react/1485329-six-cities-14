import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Favorities from './pages/Favorites';
import Offer from './pages/Offer';
import NoMatch from './pages/NoMatch';
import { AppRoute } from './utils/constants';
import PrivateRoute from './routes/PrivateRoute';

type AppMainProps = {
  placesCount: number;
}

function App ({placesCount}: AppMainProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main placesCount={placesCount}/>} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Favorities} element={
          <PrivateRoute authStatus={'NO_AUTH'} >
            <Favorities />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Offer} element={<Offer />} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
