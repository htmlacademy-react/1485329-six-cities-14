import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { offersArray } from './mocks/offers';
import { reviewsArray } from './mocks/reviews';

const Settings = {
  placesCount: 312,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={Settings.placesCount} offers={offersArray} reviews={reviewsArray}/>
  </React.StrictMode>
);
