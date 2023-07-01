import { createSlice } from "@reduxjs/toolkit"
import { ColorScheme } from "@mantine/core"



const ColorModeSlice = createSlice({
    name: "color_mode",
    initialState: "light",
    reducers: {
        toggleMode: (state) => {
            return state === "light" ? "dark" : "light" as ColorScheme
        }
    }
})

export const { toggleMode } = ColorModeSlice.actions
export default ColorModeSlice.reducer