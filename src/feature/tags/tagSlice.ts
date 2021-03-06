import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const tagSlice = createSlice({
    name: 'tag',
    initialState: ['All'],
    reducers: {
        toggleTag: (state, action: PayloadAction<string>) => {
            if (state.includes("All")) {
                return [action.payload];
            }

            if(action.payload === "All"){
                return ["All"];
            }

            const tagPosition = state.indexOf(action.payload);
            if (tagPosition === -1) {
                state.push(action.payload);
            } else {
                state.splice(tagPosition, 1);
            }
        },
    },
});

export const { toggleTag } = tagSlice.actions;

export default tagSlice.reducer;