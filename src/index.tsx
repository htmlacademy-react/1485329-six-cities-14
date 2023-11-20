import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import App from './App';
import { offersArray } from './mocks/offers';
import { reviewsArray } from './mocks/reviews';
import { city } from './mocks/city';

const store = setupStore;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider  store={store}>
    <React.StrictMode>
      <App offers={offersArray} reviews={reviewsArray} city={city}/>
    </React.StrictMode>
  </Provider>
);
