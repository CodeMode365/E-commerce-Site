import { createStyles } from "@mantine/core"

export const useStyles = createStyles(() => ({
    card: {
        cursor: "pointer",
        background: "linear-gradient(180deg, rgba(30, 0, 0, 0.75) 0%, rgba(34, 139, 230, 0.55) 90%), url('./src/assets/clothes.jpg')",
        backdropFilter: "blur(.5)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        color: "red",
        transition: ".2s",
        "&:hover": {
            boxShadow: "0 0 15px 1px black"
        }
    }
}))
