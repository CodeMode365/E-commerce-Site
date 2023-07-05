import { createStyles } from "@mantine/core"
export const useStyles = createStyles((theme) => (
    {
        Filter: {
            display: "flex",
            flexDirection: "row",
            gap: theme.spacing.md,
            border: theme.colorScheme === "light" ? `2px solid ${theme.colors.gray[3]}` : `2px solid ${theme.colors.gray[8]}`,
            padding: theme.spacing.sm,
            borderRadius: theme.radius.md,
            marginBlock: theme.spacing.sm,

        }
    }

))
