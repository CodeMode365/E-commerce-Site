import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iItems } from "../../assets/Items";

interface cartItem extends iItems {
    quantity: number;
    totalAmount: number;
}

const initialData: cartItem[] = [];

const CartSlice = createSlice({
    name: "Cart Items",
    initialState: initialData,
    reducers: {
        addToCart: (state: cartItem[], operatingItem: PayloadAction<iItems>) => {
            const foundItem = state.find((item: cartItem) => operatingItem.payload.id === item.id);
            if (foundItem) {
                return [...state, { ...foundItem, quantity: foundItem.quantity + 1 }];
            }
            return [...state, { ...operatingItem.payload, quantity: 1, totalAmount: operatingItem.payload.price }];
        },
        removeItem: (state, operatingItem: PayloadAction<iItems>) => {
            // Remove the item from the state based on the operatingItem payload
            return state.filter((item: cartItem) => item.id !== operatingItem.payload.id);
        },
        removeAllItems: () => {
            return [];
        },
    },
});


export const { addToCart, removeAllItems, removeItem } = CartSlice.actions
export default CartSlice.reducer;