import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        // Toggle filter to be inactive if selected. Apply the pressed filter otherwise
        toggle: (state, action: PayloadAction<'mug' | 'shirt'>) => {
            console.log("state", state, action);

            if (state === action.payload) {
                return '';
            }
            return action.payload;
        },
    },
});

export const { toggle } = filterSlice.actions;

export default filterSlice.reducer;