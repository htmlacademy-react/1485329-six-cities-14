import { useState } from 'react';
import CardsList from '../components/CardsList';
import SortForm from '../components/SortForm';
import Header from '../components/Header';
import Map from '../components/Map';
import { useAppSelector } from '../hooks/reducer';
import CitiesTabs from '../components/CitiesTabs';
import MainListEmpty from '../components/MainListEmpty';
import { cities } from '../mocks/cities';


function Main (): JSX.Element {

  const [сardHoverId, setCardHoverId] = useState<number | null>(null);

  const cityName = useAppSelector((state) => state.city);

  const allOffers = useAppSelector((state) => state.offers);

  // Фильтрация по городу из стора
  const offersFiltredByCity = allOffers.filter((item) => item.city.name === cityName);

  // Поиск объекта города из моков по значению из стора
  const selectedCity = cities.find((item) => item.name === cityName);

  return (
    <div className="page page--gray page--main">

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>

        <CitiesTabs cityName={cityName}/>

        {!offersFiltredByCity && <MainListEmpty />}

        {offersFiltredByCity.length > 0 &&

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersFiltredByCity.length} {offersFiltredByCity.length > 1 ? 'places' : 'place'}  to stay in {cityName}</b>
              <SortForm />
              <CardsList offers={offersFiltredByCity} setCardHoverId={setCardHoverId} cardType={'mainScreen'} cardsListType={'mainScreen'}/>
            </section>
            <div className="cities__right-section">
              <Map offers={offersFiltredByCity} city={selectedCity} сardHoverId={сardHoverId} mapType={'mainScreen'}/>
            </div>
          </div>
        </div>}

      </main>
    </div>
  );
}

export default Main;
