import { configureStore } from "@reduxjs/toolkit";
import ColorModeReducer from "./Slices/ColorMode";
import CartReducer from "./Slices/Cart"
import AuthReducer from "./Slices/Auth"

// const rootReducer = combineReducers({})

const store = configureStore({
    reducer: {
        colorMode: ColorModeReducer,
        cartItems: CartReducer,
        auth: AuthReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store