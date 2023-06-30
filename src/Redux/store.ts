import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ColorModeReducer from "./Slices/ColorMode";

// const rootReducer = combineReducers({})

const store = configureStore({
    reducer: {
        colorMode: ColorModeReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store