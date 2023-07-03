import { createSlice } from "@reduxjs/toolkit"
import { ColorScheme } from "@mantine/core"

const mode = localStorage.getItem("color_mode") || "light"

const ColorModeSlice = createSlice({
    name: "color_mode",
    initialState: mode,
    reducers: {
        toggleMode: (state) => {
            if (state === "light") {
                localStorage.setItem("color_mode", "dark")
            } else {
                localStorage.setItem("color_mode", "light")
            }
            return localStorage.getItem("color_mode") as ColorScheme
        }
    }
})

export const { toggleMode } = ColorModeSlice.actions
export default ColorModeSlice.reducer