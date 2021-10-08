import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SortProperty = 'price' | 'added';

export type SortOrder = 'asc' | 'desc';

interface State {
    sortBy: SortProperty;
    order: SortOrder;
}

const initialState = {
    sortBy: 'price',
    order: 'asc'
}

export const sortingSlice = createSlice({
    name: 'tag',
    initialState,
    reducers: {
        setSortProperty: (state, action: PayloadAction<SortProperty>) => {
            state.sortBy = action.payload;
        },
        setSortOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
    },
});

export const { setSortProperty, setSortOrder } = sortingSlice.actions;

export default sortingSlice.reducer;