import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    card: {
        height: rem(200),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: "relative"
    },
    lazyImage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        left: 0,
        top: 0,
        borderRadius: theme.radius.md,
        filter: "brightness(.8)",
        objectFit: "cover"
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: rem(32),
        marginTop: theme.spacing.xs,
    },

    category: {
        color: theme.white,
        opacity: 0.7,
        fontWeight: 700,
        textTransform: 'uppercase',
    },
    btn: {
        transition: ".4s",
        "&:hover": {
            cursor: "pointer",
            // background: theme.colors.blue[7],
            // color: "#fff"
            backdropFilter: 'brightness(.2)',
        }
    }
}));