import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OffersArrayType, OfferCity } from "../../types/offer";
import { offersArray } from "../../mocks/offers";
import { city } from "../../mocks/city";

const startArray = offersArray.filter(item => item.city.name === 'Paris')

type MainCardsState = {
  city: OfferCity;
  offers: OffersArrayType;
  filtredOffers: OffersArrayType,
};


const initialState: MainCardsState = {
  city: city,
  offers: offersArray,
  filtredOffers: startArray,
};

export const MainCardsSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    changeCity(state, action) {
      state.city.name = action.payload
    },
    filteredOffersByCity(state, action) {
      state.filtredOffers = state.offers.filter(item => item.city.name === action.payload)
    }
  },
})

export default MainCardsSlice.reducer;
export const {changeCity, filteredOffersByCity} = MainCardsSlice.actions;
