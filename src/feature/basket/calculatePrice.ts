import { BasketEntry } from "./basketSlice";

export function calculatePrice(basketItems: BasketEntry[]){
    let totalPrice = 0;
    basketItems.map(basketItem => {
        const price = basketItem.product.price;
        const count = basketItem.count;

        totalPrice += price*count;
    })

    return totalPrice.toFixed(2);
}