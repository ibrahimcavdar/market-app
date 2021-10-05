import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const tagSlice = createSlice({
    name: 'tag',
    initialState: [],
    reducers: {
        setTag: (state, action: PayloadAction<string>) => {
            
        },
    },
});

export const { setTag } = tagSlice.actions;

export default tagSlice.reducer;