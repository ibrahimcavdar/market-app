import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ItemType = 'mug' | 'shirt';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: 'mug' as ItemType,
    reducers: {
        setItemType: (state, action: PayloadAction<ItemType>) => {
            return action.payload;
        },
    },
});

export const { setItemType } = filterSlice.actions;

export default filterSlice.reducer;