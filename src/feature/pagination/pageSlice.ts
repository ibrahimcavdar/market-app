import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const pageSlice = createSlice({
    name: 'page',
    initialState: {
        selectedPage: 1,
        pageCount: 1
    },
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.selectedPage = action.payload;
        },
        setPageCount: (state, action: PayloadAction<number>) => {
            state.pageCount = action.payload;
        },
    },
});

export const { setPage, setPageCount } = pageSlice.actions;

export default pageSlice.reducer;