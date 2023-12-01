import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Favorities from './pages/Favorites';
import Offer from './pages/Offer';
import NoMatch from './pages/NoMatch';
import { AppRoute } from './utils/constants';
import PrivateRoute from './routes/PrivateRoute';
import { OffersArrayType, OfferCity } from './types/offer';
import { ReviewsArrayType } from './types/review';

type AppProps = {
  offers: OffersArrayType;
  reviews: ReviewsArrayType;
  city: OfferCity;
}

function App ({ offers, reviews, city}: AppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<Main />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Favorities} element={
          <PrivateRoute authStatus={'AUTH'} >
            <Favorities offers={offers} />
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.Offer} element={<Offer offers={offers} reviews={reviews} city={city}/>} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
