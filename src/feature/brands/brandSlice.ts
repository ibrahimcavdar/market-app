import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const brandSlice = createSlice({
    name: 'brand',
    initialState: ['All'],
    reducers: {
        toggleBrand: (state, action: PayloadAction<string>) => {
            if (state.includes("All")) {
                return [action.payload];
            }

            if(action.payload === "All"){
                return ["All"];
            }

            const brandPosition = state.indexOf(action.payload);
            if (brandPosition === -1) {
                state.push(action.payload);
            } else {
                state.splice(brandPosition, 1);
            }
        },
    },
});

export const { toggleBrand } = brandSlice.actions;

export default brandSlice.reducer;