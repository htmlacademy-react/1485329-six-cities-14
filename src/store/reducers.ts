import { createReducer } from '@reduxjs/toolkit';
import { offersArray } from '../mocks/offers';
import { OffersArrayType } from '../types/offer';
import { changeCity } from './actions';

type MainCardsState = {
  city: string;
  offers: OffersArrayType;
};

const initialState: MainCardsState = {
  city: 'Paris',
  offers: offersArray,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    });
});

export {reducer};

