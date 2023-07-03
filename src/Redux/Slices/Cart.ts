import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { iItems } from "../../assets/Items";

interface cartItem extends iItems {
    quantity: number;
    totalAmount: number;
}

const initialData: cartItem[] = JSON.parse(localStorage.getItem("cartItems") as string) as cartItem[] || [];

const CartSlice = createSlice({
    name: "Cart Items",
    initialState: initialData,
    reducers: {
        addToCart: (state: cartItem[], operatingItem: PayloadAction<iItems>) => {
            const foundItem = state.find((item: cartItem) => operatingItem.payload.id === item.id);
            if (foundItem) {
                const otherItems = state.filter((item: cartItem) => item.id !== foundItem.id)
                const newState = [...otherItems, { ...foundItem, quantity: Number(foundItem.quantity) + 1 }]
                localStorage.setItem("cartItems", JSON.stringify(newState))
                return newState
            } else {
                const newState = [...state, { ...(operatingItem.payload), quantity: 1, totalAmount: operatingItem.payload.price }];
                localStorage.setItem("cartItems", JSON.stringify(newState))
                return newState
            }
        },
        removeItem: (state, operatingItem: PayloadAction<iItems>) => {
            // Remove the item from the state based on the operatingItem payload
            const filteredCart = state.filter((item: cartItem) => item.id !== operatingItem.payload.id);
            localStorage.setItem("cartItems", JSON.stringify(filteredCart))
            return filteredCart
        },
        incQuantity: (state, operatingItem: PayloadAction<iItems>) => {
            const foundItem = state.find((item: cartItem) => operatingItem.payload.id === item.id)
            const indexofItem = state.findIndex((item: cartItem) => operatingItem.payload.id === item.id)

            if (foundItem) {
                const filteredCart = state.filter((item: cartItem) => item.id !== operatingItem.payload.id)
                const newState = [...filteredCart]
                newState.splice(indexofItem, 0, { ...foundItem, quantity: foundItem.quantity + 1 })
                localStorage.setItem("cartItems", JSON.stringify(newState))
                return newState
            } return state

        },
        dcrQuantity: (state, operatingItem: PayloadAction<iItems>) => {
            const foundItem = state.find((item: cartItem) => operatingItem.payload.id === item.id)
            const indexofItem = state.findIndex((item: cartItem) => operatingItem.payload.id === item.id)
            if (foundItem) {
                const filteredCart = state.filter((item: cartItem) => item.id !== operatingItem.payload.id)
                const newState = [...filteredCart]
                newState.splice(indexofItem, 0, { ...foundItem, quantity: foundItem.quantity - 1 })
                localStorage.setItem("cartItems", JSON.stringify(newState))
                return newState
            }
            return state
        },

        removeAllItems: () => {
            return [];
        },
    },
});


export const { addToCart, removeAllItems, removeItem, incQuantity, dcrQuantity } = CartSlice.actions
export default CartSlice.reducer;