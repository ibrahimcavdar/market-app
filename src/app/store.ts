import filterSlice from './../feature/filter/filterSlice';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tagSlice from '../feature/tags/tagSlice';
import brandSlice from '../feature/brands/brandSlice';
import sortingSlice from '../feature/sorting/sortingSlice';
import basketSlice from '../feature/basket/basketSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    tag: tagSlice,
    brand: brandSlice,
    sorting: sortingSlice,
    basket: basketSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
