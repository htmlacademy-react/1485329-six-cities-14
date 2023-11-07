import { useState } from 'react';
import { OffersArrayType } from '../types/offer';
import CardsList from '../components/CardsList';
import SortForm from '../components/SortForm';
import Header from '../components/Header';

type MainProps = {
  placesCount: number;
  offers: OffersArrayType;
};

function Main ({placesCount, offers}: MainProps): JSX.Element {

  const [сardHoverId, setCardHoverId] = useState<number | null>(null);

  return (
    <div className="page page--gray page--main">

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className={'locations__item-link tabs__item tabs__item--active'} href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{placesCount} places to stay in Amsterdam</b>
              <SortForm />
              <CardsList offers={offers} setCardHoverId={setCardHoverId}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" >{сardHoverId}</section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
