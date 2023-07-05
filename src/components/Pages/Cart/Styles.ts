import { createStyles } from "@mantine/core"

export const useStyles = createStyles((theme) => ({
    Quantity: {
        display: "flex",
        alignItems: "center",
    },

    OprBtn: {
        borderRadius: theme.radius.lg,
        margin: 0,
        // padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginInline: theme.spacing.md,
        padding: "3px",
        color: theme.colors.lime[1],
        border: "none"
    },
    IncBtn: {
        background: theme.colors.green[5]
    },
    DcrBtn: {
        background: theme.colors.cyan[5]
    },
    ItemHolder: {
        background: theme.colorScheme == "dark" ? theme.colors.gray[8] : theme.colors.gray[3],
        borderRadius: theme.radius.sm,
        padding: theme.spacing.xs
    },
    FinalCalc: {
        background: theme.colorScheme == "dark" ? theme.colors.gray[9] : theme.colors.gray[1],
        borderRadius: theme.radius.sm,
        padding: theme.spacing.xs

    }
}))
