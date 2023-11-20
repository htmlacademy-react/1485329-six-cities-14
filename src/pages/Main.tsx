import { useState } from 'react';
import { OfferCity, OffersArrayType } from '../types/offer';
import CardsList from '../components/CardsList';
import SortForm from '../components/SortForm';
import Header from '../components/Header';
import Map from '../components/Map';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import {changeCity, filteredOffersByCity} from '../store/reducers/MainCardsSlice';
import { NavLink } from 'react-router-dom';
import MainEmpty from '../components/MainEmpty';

type MainProps = {
  offers: OffersArrayType;
  city: OfferCity;
};

function Main ({offers, city}: MainProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [сardHoverId, setCardHoverId] = useState<number | null>(null);

  const filtredOffersArray = useAppSelector(state => state.mainCards.filtredOffers);
  const selectedCity = useAppSelector(state => state.mainCards.city.name);
  const selectedCityObj = useAppSelector(state => state.mainCards.city);

  const handleChangeCity = (event) => {
    dispatch(changeCity(event.currentTarget.getAttribute('data-link-name')))
    dispatch(filteredOffersByCity(event.currentTarget.getAttribute('data-link-name')))
  }

  return (
    <div className="page page--gray page--main">

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <NavLink className={isActive => "locations__item-link " + (isActive ? "tabs__item" : "tabs__item--active")} to={'/'}data-link-name="Paris" onClick={handleChangeCity}>
                  <span>Paris</span>
                </NavLink>
              </li>
              <li className="locations__item">
                <NavLink className={isActive => "locations__item-link " + (isActive ? "tabs__item" : "tabs__item--active")} to={'/'}data-link-name='Cologne' onClick={handleChangeCity}>
                  <span>Cologne</span>
                </NavLink>
              </li>
              <li className="locations__item">
                <NavLink className={isActive => "locations__item-link " + (isActive ? "tabs__item" : "tabs__item--active")} to={'/'}data-link-name='Brussels' onClick={handleChangeCity}>
                  <span>Brussels</span>
                </NavLink>
              </li>
              <li className="locations__item">
                <NavLink className={isActive => "locations__item-link " + (isActive ? "tabs__item" : "tabs__item--active")} to={'/'}data-link-name='Amsterdam' onClick={handleChangeCity}>
                  <span>Amsterdam</span>
                </NavLink>
              </li>
              <li className="locations__item">
                <NavLink className={isActive => "locations__item-link " + (isActive ? "tabs__item" : "tabs__item--active")} to={'/'}data-link-name='Hamburg' onClick={handleChangeCity}>
                  <span>Hamburg</span>
                </NavLink>
              </li>
              <li className="locations__item">
                <NavLink className={isActive => "locations__item-link " + (isActive ? "tabs__item" : "tabs__item--active")} to={'/'}data-link-name='Dusseldorf' onClick={handleChangeCity}>
                  <span>Dusseldorf</span>
                </NavLink>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          {filtredOffersArray.length > 0 &&
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filtredOffersArray.length} {filtredOffersArray.length > 1 ? 'places' : 'place'}  to stay in {selectedCity}</b>
                <SortForm />
                <CardsList offers={filtredOffersArray} setCardHoverId={setCardHoverId} cardType={'mainScreen'} cardsListType={'mainScreen'}/>
              </section>
              <div className="cities__right-section">
                <Map offers={filtredOffersArray} city={selectedCityObj} сardHoverId={сardHoverId} mapType={'mainScreen'}/>
              </div>
            </div>
          }

          {!filtredOffersArray && <MainEmpty />}
        </div>
      </main>
    </div>
  );
}

export default Main;
