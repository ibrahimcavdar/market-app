import { Product } from './../productList/ProductListPanel';
import { createSlice, PayloadAction,current } from '@reduxjs/toolkit';

interface BasketEntry {
    product: Product;
    count: number;
}

const basketSlice = createSlice({
    name: 'basket',
    initialState: {} as Record<string, BasketEntry>,
    reducers: {
        addItemToBasket: (state, action: PayloadAction<Product>) => {
            const itemSlug = action.payload.slug;
            
            if (state[itemSlug]) {
                state[itemSlug].count++;
            } else {
                state[itemSlug] = {
                    product: action.payload,
                    count: 1
                };
            }
        },
        removeItemFromBasket: (state, action: PayloadAction<Product>) => {
            const itemSlug = action.payload.slug;
            if (state[itemSlug].count < 2) {
                delete state[itemSlug];
            } else {
                state[itemSlug].count = state[itemSlug].count - 1;
            }
        },
    },
});

export const { addItemToBasket,removeItemFromBasket } = basketSlice.actions;

export default basketSlice.reducer;