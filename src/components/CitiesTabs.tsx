import { Fragment } from 'react';
import { cities } from '../mocks/cities';
import { useAppDispatch } from '../hooks/reducer';
import { changeCity } from '../store/actions';

type CitiesTabsProps = {
  cityName: string;
}

function CitiesTabs ({cityName}: CitiesTabsProps): JSX.Element {

  const dispatch = useAppDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            cities.map((item) => (
              <Fragment key={item.name}>
                <li className="locations__item">
                  <a className={`locations__item-link tabs__item ${item.name === cityName ? 'tabs__item--active' : ''}`} href="#" onClick={() => dispatch(changeCity(item.name))}>
                    <span>{item.name}</span>
                  </a>
                </li>
              </Fragment>
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default CitiesTabs;
