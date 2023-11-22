import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { offersArray } from './mocks/offers';
import { reviewsArray } from './mocks/reviews';
import { city } from './mocks/city';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App offers={offersArray} reviews={reviewsArray} city={city}/>
    </Provider>
  </React.StrictMode>
);
