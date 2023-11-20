import { combineReducers, configureStore } from '@reduxjs/toolkit';

import mainCardsReducer from './reducers/MainCardsSlice';

const rootReducer = combineReducers({
  mainCards: mainCardsReducer,
});

export const setupStore = configureStore({
    reducer: rootReducer,
  })

export type RootState = ReturnType<typeof setupStore.getState>
export type AppDispatch = typeof setupStore.dispatch
